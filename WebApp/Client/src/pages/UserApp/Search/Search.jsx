import "./Search.scss";
import NavBar from "../../../components/NavBar/NavBar";
import Formation from "../../../components/Formation/formation";
import { ReactComponent as ListIcon } from "../../../assets/icons/list-icon.svg";
function Search() {
	// Contenue de l'affichage d'une formation
	
	return (
		<>
			<NavBar />
			<div className="search__container">
				<div className="search__content">
					<div className="search__theme">
						<div className="search__theme__title">
							Quelle domaine vous passionne ?
						</div>
						<div className="search__theme__body">
							{/*TODO Faire une boucle avec tous les themes récupérés en backend  */}
							{/* Lorsqu'on appuie sur un thème on filtre tous les thèmes */}
							<button className="search__theme__button">
								Developpement
							</button>
							<button className="search__theme__button">
								Réseau
							</button>
							<button className="search__theme__button">
								Electronique
							</button>
							<button className="search__theme__button">
								Adminstration
							</button>
							<button className="search__theme__button">
								AI
							</button>
							<button className="search__theme__button">
								Electricité
							</button>
							<button className="search__theme__button">
								Mobile
							</button>
						</div>
					</div>
					<div className="search__formation">
						{/*TODO Faire une boucle avec tous les formations récupérés en backend */}
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
					</div>
				</div>
			</div>
		</>
	);
}

export default Search;
