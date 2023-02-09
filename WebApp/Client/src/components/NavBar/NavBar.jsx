import "./NavBar.scss";
import { connect } from "react-redux";

//dependencies
import { Link } from "react-router-dom";

//svg's
import { ReactComponent as DownArrow } from "../../assets/icons/down-icon.svg";
import { ReactComponent as LangIcon } from "../../assets/icons/language-icon.svg";
import { getDataFormation } from "../../action/formationAction";

function NavBar(props) {
	return (
		<div className="navbar-main-div">
			<div className="navbar-logo">
				<Link to="/website">
					<h1>Academox</h1>
				</Link>
			</div>
			<div className="navbar-links">
				<div
					className="nav-links-items"
					onClick={() => {
						props.getFormations();
					}}
				>
					<Link to="/website/domain">domaines</Link>
				</div>
				<div className="navbar-lang">
					<LangIcon id="nav-lang-icon" />
					<DownArrow id="nav-arrow-icon" />
					<LangDropdown />
				</div>
				<div className="vertical-line"></div>
				<div>
					<p>toggle</p>
				</div>
				<div className="vertical-line"></div>
				<div className="nav-login-link">
					<Link to="/website/login">Login</Link>
				</div>
			</div>
		</div>
	);
}

const LangDropdown = () => {
	return (
		<div className="navbar-dropdown">
			<div className="selected-lang">
				<p>English</p>
			</div>
			<div className="other-languages">
				<p>French</p>
				<p>Spanish</p>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		formations: state.formationState.formations,
	};
};

const mapStateToDispatch = (dispatch) => {
	return {
		getFormations: () => dispatch(getDataFormation()),
	};
};

const connector = connect(mapStateToProps, mapStateToDispatch);
export default connector(NavBar);
