import "./Trainers.scss";

import P1 from "@/assets/image/p1.avif";
import P2 from "@/assets/image/p2.jpeg";
import P3 from "@/assets/image/p3.webp";
import P4 from "@/assets/image/p1.avif";

function TrainersProfile() {
	return (
		<div className="container-trainer">
			<div className="profile-person">
				<img src={P2} alt="photoProfile" className="profile_pic" />
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
