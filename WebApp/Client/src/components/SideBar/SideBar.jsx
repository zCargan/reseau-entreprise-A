import "./SideBar.scss";
import Logo from "@/assets/logo/logo.svg";

function SideBar() {
	return (
		<div className="side_bar">
			<div className="logo_title">
				<img src={Logo} className="logo" />
				<h1 className="logo_text">Academox</h1>
			</div>
		</div>
	);
}

export default SideBar;
