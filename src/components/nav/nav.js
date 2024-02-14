/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.scss";
import whiteImg from "../../assets/icons/white-beams.svg";
import blackImg from "../../assets/icons/beams.svg";

const Nav = ({ isBlack }) => {
    let clazz = "";
    let image = whiteImg;

    if (isBlack) {
        clazz = "nav-black";
        image = blackImg;
    }

    return (
        <nav className={clazz}>
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
