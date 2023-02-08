import "./Login.scss";
import { Link } from "react-router-dom";
// import Google from "../../../assets/icons/google.svg";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Logo from "@/assets/icons/logo.svg";
import { useState } from "react";
function Login() {
	const connexion = "Connexion";
	const inscription = "Inscription";

	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [status, setStatus] = useState(inscription);

	const submitUser = (e) => {
		e.preventDefault();

		if (
			userMail.indexOf(" ") !== -1 ||
			userMail.indexOf("@") === -1 ||
			userMail.indexOf(".") === -1
		) {
			console.log("erreur de mail");
			setError("erreur");
			return;
		}

		if (status === inscription || status === "") {
			props.inscription(userName, userMail, userPassword);
		} else if (status === connexion) {
			props.signIn(userMail, userPassword);
		}
	};
	return (
		<div className="login__container">
			<div className="login__content">
				<div className="login__header">
					<div className="login__return">
						<Link to="/website/domain">
							<img src={ArrowLeft} alt="arrow_left" />
						</Link>
					</div>
					<div className="login__title">
						<img src={Logo} alt="" />
						<h1>Academox</h1>
					</div>
					<div className="login__form">
						{error && (
							<p style={{ color: "red" }}>
								Veuillez entrer un e-mail valide !!!
							</p>
						)}
						{(status === inscription || status === "") && (
							<input
								type="text"
								placeholder="Nom"
								onChange={() => {
									setName(e.target.value);
								}}
							/>
						)}
						<input
							type="email"
							placeholder="E-mail"
							onChange={() => {
								setMail(e.target.value);
							}}
						/>
						<input
							type="password"
							placeholder="Mot de passe"
							onChange={() => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					{status === inscription ? (
						<div
							className="login__send"
							onClick={(e) => {
								submitUser(e);
							}}
						>
							S'inscrire
						</div>
					) : (
						<div
							className="login__send"
							onClick={(e) => {
								submitUser(e);
							}}
						>
							Se connecter
						</div>
					)}
					<div className="login__google">
						<img src={GoogleIcon} alt="google" />
						<span>Se connecter avec google</span>
					</div>
					<div className="login__connection">
						<span>Déjà un compte?</span>
						{status === inscription ? (
							<span
								onClick={() => {
									setStatus(connexion);
								}}
								style={{ cursor: "pointer" }}
							>
								{" "}
								Se connecter
							</span>
						) : (
							<span
								onClick={() => {
									setStatus(inscription);
								}}
								style={{ cursor: "pointer" }}
							>
								{" "}
								S'inscrire
							</span>
						)}
					</div>
				</div>
				<div className="login__wave">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
					>
						<path
							fill="#287fe8"
							fillOpacity="1"
							d="M0,64L12.6,69.3C25.3,75,51,85,76,96C101.1,107,126,117,152,128C176.8,139,202,149,227,144C252.6,139,278,117,303,122.7C328.4,128,354,160,379,192C404.2,224,429,256,455,266.7C480,277,505,267,531,224C555.8,181,581,107,606,106.7C631.6,107,657,181,682,181.3C707.4,181,733,107,758,85.3C783.2,64,808,96,834,106.7C858.9,117,884,107,909,138.7C934.7,171,960,245,985,240C1010.5,235,1036,149,1061,144C1086.3,139,1112,213,1137,250.7C1162.1,288,1187,288,1213,250.7C1237.9,213,1263,139,1288,106.7C1313.7,75,1339,85,1364,80C1389.5,75,1415,53,1427,42.7L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Login;
