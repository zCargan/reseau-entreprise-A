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

	let imageUrl = useRef("");
	let image = useRef(null);

	// TODO REQUETE POUR CHOPER LA LISTE DE TOUT LES THEMES
	const availableThemes = [
		{ name: "Développement", id: 1 },
		{ name: "Mathématiques", id: 2 },
	];

	// TODO AJOUTER LES FICHIERS QUI SONT DROP DANS CETTE LISTE
	const [droppedFiles, setDroppedFiles] = useState([]);

	const handleSubmit = (e) => {
		console.log("SUBMITTED");
		console.log(courseTitle.current.value);
		e.preventDefault();
	};

	const handleFile = (e) => {
		console.log(e.target.value);
		if (e.target.files[0].size < 100 * 1048576) {
			if (e.target.files[0]) {
				console.log(imageUrl.current, image.current);
				setDroppedFiles((oldList) => [
					...oldList,
					{
						url: URL.createObjectURL(e.target.files[0]),
						data: e.target.files[0],
						name: e.target.files[0].name,
					},
				]);
			}
		} else {
			// TODO IMPLEMENT ERROR HANDLING
			console.log("size error");
		}
	};

	return (
		<div className="main_tab">
			<div className="tab_title">
				<div className="tab_title_background"></div>
				<h1>Create a new course</h1>
			</div>
			<div className="container">
				<form
					action=""
					onSubmit={handleSubmit}
					className="fields_container"
				>
					<div>
						<input
							type="text"
							ref={courseTitle}
							placeholder="Name of the course"
							className="input_style"
						/>
						<select
							type="text"
							ref={courseTheme}
							// style={{ color: "rgba(0, 0, 0, 0.5)" }}
							className="input_style"
						>
							<option value="" selected hidden>
								Select a theme
							</option>
							{/* BOUCLER SUR LES THEMES */}
							{availableThemes.map((theme) => {
								return (
									<option value={theme.id}>
										{theme.name}
									</option>
								);
							})}
						</select>
						<textarea
							placeholder="Describe the new course..."
							ref={courseDesc}
							className="input_style"
						></textarea>
						<button action="submit" className="validation_button">
							Add course
						</button>
					</div>
					<div>
						<div className="file_drop_zone">
							<input type="file" onChange={handleFile} unique />
							<p>Select a file to add</p>
						</div>
						<div className="file_list">
							<h3>Fichier ajoutés:</h3>
							<div>
								{droppedFiles.map((file) => {
									return (
										<div className="file_list_element">
											<p>{file.name}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateCourse;
