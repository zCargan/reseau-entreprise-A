import React from "react";
import "./Formation.scss";
// contenu d'une formation
import Theme from "@/assets/image/download.jfif";
import SecondTheme from "@/assets/image/developpement-web-featured.jpg";
// Theme, la description, prix, nom de la formation
function Formation(props) {
	return (
		<div className="formation__container">
			<div className="formation__content">
				<div className="formation__image">
					{/* Get profile photo of author */}
					<img src={SecondTheme} alt="code" />
				</div>
				<div className="formation__detail">
					<div className="formation__theme">
						{props.theme ? props.theme : "Programmation"}{" "}
					</div>
					<div className="formation__title">
						{props.title
							? props.title
							: "Cours de développement web"}{" "}
					</div>
					<div className="formation__author">
						{props.author ? props.author : "Jean Clenche"}{" "}
					</div>
					<div className="formation__price">
						{props.prix ? props.prix : "100"} €
					</div>
				</div>
			</div>
		</div>
	);
}

export default Formation;
