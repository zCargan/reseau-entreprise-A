import "./SideBar.scss";
import Logo from "@/assets/icons/logo.svg";
import Logout from "@/assets/icons/logout.svg";
import { Link } from "react-router-dom";

function SideBar() {
	return (
		<div className="side_bar">
			<div className="logo_title">
				<img src={Logo} className="logo" alt="Academox site logo" />
				<Link to="/" className="logo_text">
					Academox
				</Link>
			</div>
			<div className="nav_links">
				<Link to="/dashboard" className="nav_element">
					My courses
				</Link>{" "}
				<Link to="/dashboard/trainers" className="nav_element">
					Trainers
				</Link>
				<Link to="/dashboard/search" className="nav_element">
					Search
				</Link>
				<Link to="/dashboard/create-course" className="nav_element">
					Create course
				</Link>
			</div>
			<div className="account">
				<Link to="/dashboard">Aymar</Link>
				<img
					src={Logout}
					className="logo"
					alt="Logout from the website"
				/>
			</div>
		</div>
	);
}

export default SideBar;
