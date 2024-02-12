/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.scss";
import image from "../../assets/icons/white-beams.svg";

const Nav = () => {
    return (
        <nav>
            <a href="#">
                <div className="logo">
                    <img src={image} alt="logo" />
                    Coffee house
                </div>
            </a>
            <a href="#">Our coffee</a>
            <a href="#">For your pleasure</a>
        </nav>
    );
};

export default Nav;
