import "./Home.scss"

//svg's
import {ReactComponent as Wave} from "../../../assets/icons/wave.svg";
import {ReactComponent as SvgIcon} from "../../../assets/icons/web-icon.svg";

function Home(){
    return(
        <div className="home-main-div">
            <div className="home-wave-div">
                <div className="empty-div"></div>
                <div className="wave-div">
                    <Wave />
                </div>
                <div className="absolute-home-div">
                    <div className="text-description">
                        <h1><span>Welcome</span> to Academox</h1>
                        <h3>Devvelopp your skills online with our partners</h3>
                        <div className="join-us-button">
                            <button>Join our community</button>
                        </div>
                    </div>
                    <div className="svg-icon-div">
                        <SvgIcon id="learn-icon" />
                    </div>
                </div>
            </div>
            <AboutUs />
        </div>
    )
}

const AboutUs = () => {
    return(
        <div className="about-section">
            <div className="about-us-title">
                <h1>About us</h1>
            </div>
            <div className="about-us-description">
                <p>you are in the middle of a professional transition?</p>
                <p>you want to learn quickly, efficiently and from experts?</p>
                <p>At Academox, we offer a range of free and paid training courses that will</p>
                <p>enable you to learn the job of your choice in the way that suits you.</p>
            </div>
            <button>Start now</button>
        </div>
    )
}

export default Home;