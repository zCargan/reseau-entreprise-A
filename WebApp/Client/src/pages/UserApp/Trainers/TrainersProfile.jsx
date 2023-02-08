import "./Trainers.scss";

import Profile from "@/assets/image/bebe.jpg";

function TrainersProfile() {
	return (
		<div className="container-trainer">
			<div className="profile-person">
				<img src={Profile} alt="photoProfile" className="profile_pic" />
				<div className="profile-name">
					<div className="name-p">Nom:</div>
					<div className="name-m">Mazouille</div>
					<div className="name-m">Michael</div>
				</div>
				<button className="button">voir le profile</button>
			</div>
		</div>
	);
}

export default TrainersProfile;
