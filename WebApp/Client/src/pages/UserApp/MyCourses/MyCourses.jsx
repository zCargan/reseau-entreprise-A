import "./MyCourses.scss";
import ProfilePic from "@/assets/images/popo.png";
import { useState } from "react";

function MyCourses() {
	const [name, setName] = useState("Aymar");
	const [secondName, setSecondName] = useState("Hakizimana");
	return (
		<div className="my_course_tab">
			<div className="tab_title">
				<div className="tab_title_background"></div>
				<h1>My courses</h1>
			</div>
			<div className="container">
				<div className="profile">
					<img
						src={ProfilePic}
						alt="Profile picture"
						className="profile_pic"
					/>

					<div className="profile_info">
						<h2 className="profile_info_title">
							Profile informations:
						</h2>
						<p>Name: {name}</p>
						<p>Second name: {secondName}</p>
					</div>
				</div>
				<div className="formation_list">
					<h2 className="formation_list_title">
						Followed formations:
					</h2>
					<div className="formation_list_container"></div>
				</div>
			</div>
		</div>
	);
}

export default MyCourses;
