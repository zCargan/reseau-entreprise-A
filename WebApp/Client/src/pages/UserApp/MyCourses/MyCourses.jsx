import "./MyCourses.scss";
import ProfilePic from "@/assets/image/popo.png";
import { useState } from "react";
import Formation from "@/components/Formation/Formation.jsx";

function MyCourses() {
	const [name, setName] = useState("Aymar");
	const [secondName, setSecondName] = useState("Hakizimana");
	return (
		<div className="main_tab">
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
						<p>
							Name: <b>{name}</b>
						</p>
						<p>
							Second name: <b>{secondName}</b>
						</p>
					</div>
				</div>
				<div className="formation_list">
					<h2 className="formation_list_title">Followed courses:</h2>
					<div className="formation_list_container">
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
						<Formation />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyCourses;
