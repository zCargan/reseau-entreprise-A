#Dans le path des scripts : powershell ./addUsers.ps1 'C:\ps\automation\csv\addUsers.csv'

# import du module Active Directory pour pouvoir lancer des commandes AD 
Import-Module ActiveDirectory


$users = Import-Csv -Path $args[0] -Header "username","firstname","lastname","password","group"

 
# Boucle qui, pour chaque utilisateur dÃ©fini dans le csv ....
foreach($user in $users){

    # On récupère les différentes données
    $username = $user.username
    $firstname = $user.firstname
    $lastname = $user.lastname
    $password = $user.password
    $group = $user.group


    # On vérifie s'il n'y a pas déjà un utilisateur existant avec ce nom
    if(Get-ADUser -Filter {samAccountName -eq $username}){
        Write-Host "Il existe dÃ©jÃ  un utilisateur $username"
    }

    # Si aucun utilisateur avec ce nom d'utilisateur existe
    else{
        New-ADUser `
            -Name "$lastname $firstname" `
            -SamAccountName $username `
            -GivenName $firstname `
            -SurName $lastname `
            -Enabled $true `
            -DisplayName "$lastname $firstname" `
            -Path "OU=Utilisateurs, DC=academox,DC=com" `
            -AccountPassword (ConvertTo-SecureString $password -AsPlainText -Force) `
            -PasswordNeverExpires $true `
            -ChangePasswordAtLogon $false

        Write-Host "L'utilisateur $username a été créé."

    }

    #Ajouter utilisateurs au Groupe
    if ($group -ne "")
         {Add-ADGroupMember -Identity $group -Members $username}

}
