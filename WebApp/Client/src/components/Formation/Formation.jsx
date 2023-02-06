import React from "react";
import "./Formation.scss";
// contenu d'une formation
import Theme from "@/assets/image/download.jfif";
import SecondTheme from "@/assets/image/developpement-web-featured.jpg";
// Theme, la description, prix, nom de la formation
function Formation() {
	return (
		<div className="formation__container">
			<div className="formation__content">
				<div className="formation__image">
					{/* Get profile photo of author */}
					<img src={SecondTheme} alt="code" />
				</div>
				<div className="formation__detail">
					<div className="formation__theme">DEVELOPPEMENT </div>
					<div className="formation__title">Developpement mobile</div>
					<div className="formation__author">Jean Dupont</div>
					<div className="formation__price">200 €</div>
				</div>
			</div>
		</div>
	);
}

export default Formation;
