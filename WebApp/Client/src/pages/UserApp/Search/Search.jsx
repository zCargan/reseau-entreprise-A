import "./Search.scss";
import NavBar from "../../../components/NavBar/NavBar";
import Formation from "../../../components/Formation/formation";
import SearchIcon from "@/assets/icons/search-icon.svg";
import { ReactComponent as ListIcon } from "../../../assets/icons/list-icon.svg";
function Search() {
	// Contenue de l'affichage d'une formation

	return (
		<>
			<div className="main_tab">
				<div className="tab_title">
					<div className="tab_title_background"></div>
					<h1>Search</h1>
				</div>
				<div className="container">
					<div className="search__container">
						<div className="search__content">
							<div className="search__theme">
								<div className="search__theme__title">
									Quelle domaine rechercher vous ?
								</div>
								<div className="search__theme__body">
									{/* Barre de recherche */}
									{/* Barre de recherche avec un input */}
									<img src={SearchIcon} alt="search" />
									<input type="text" />
								</div>
							</div>
							{/* Mettre un bouton pour confirmer la recherche */}
							<div className="search__formation">
								{/*TODO Faire une boucle avec tous les formations récupérés en backend qu'il souhaite rechercher */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <NavBar /> */}
		</>
	);
}

export default Search;
