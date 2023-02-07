import "./NavBar.scss"

//dependencies
import {Link} from "react-router-dom"

//svg's
import {ReactComponent as DownArrow} from "../../assets/icons/down-icon.svg";
import {ReactComponent as LangIcon} from "../../assets/icons/language-icon.svg";

function NavBar(){
    return(
        <div className="navbar-main-div">
            <div className="navbar-logo">
                <Link to="/website">
                    <h1>Academox</h1>
                </Link>
            </div>
            <div className="navbar-links">
                <div className="navbar-lang">
                    <LangIcon id="nav-lang-icon" />
                    <DownArrow id="nav-arrow-icon"/>
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
    )
}


const LangDropdown = () => {
    return(
        <div className="navbar-dropdown">
            <div className="selected-lang">
                <p>English</p>
            </div>
            <div className="other-languages">
                <p>French</p>
                <p>Spanish</p>
            </div>
        </div>
    )
}

export default NavBar;