import logo from "../../Images/icon.svg";
import camera from "../../Images/camera.png";
import "../../Styles/PostView.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="insta-logo">
                <img src={logo} alt="logo" id="logo"/>
                <p>Instaclone</p>
            </div>
            
            <div>
                <Link to={"/form"}>
                    <img src={camera} alt="camera" id="camera"/>
                </Link>
            </div>
        </div>
    )
}

export default Header;