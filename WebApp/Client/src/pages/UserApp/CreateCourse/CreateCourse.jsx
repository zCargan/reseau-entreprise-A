import "./CreateCourse.scss";
import { useState, useRef } from "react";

function CreateCourse() {
	// const [courseTitle, setCourseTitle] = useState("");
	// const [courseDesc, setCourseDesc] = useState("");
	// const [courseTheme, setCourseTheme] = useState("");

	let courseInfo = useRef({
		courseTitle: "",
		courseTheme: 0,
		courseDesc: "",
	});
	let courseTitle = useRef(null);
	let courseDesc = useRef(null);
	let courseTheme = useRef(null);

	// TODO REQUETE POUR CHOPER LA LISTE DE TOUT LES THEMES
	const availableThemes = {};

	const handleSubmit = (e) => {
		console.log("SUBMITTED");
		console.log(courseTitle.current.value);
		e.preventDefault();
	};

	return (
		<div className="main_tab">
			<div className="tab_title">
				<div className="tab_title_background"></div>
				<h1>Create a new course</h1>
			</div>
			<div className="container">
				<div className="fields_container">
					<form action="" onSubmit={handleSubmit}>
						<input type="text" ref={courseTitle} />
						<select type="text" ref={courseTheme}>
							<option value="">Select a theme</option>
							{/* BOUCLER SUR LES THEMES */}
						</select>
						<textarea
							placeholder="Introduiser une description..."
							ref={courseDesc}
						></textarea>
						<button action="submit"></button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateCourse;
