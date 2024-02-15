/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.scss";
import whiteImg from "../../assets/icons/white-beams.svg";
import blackImg from "../../assets/icons/beams.svg";

const Nav = ({ isBlack, onChange }) => {
    let clazz = "";
    let image = whiteImg;

    if (isBlack) {
        clazz = "nav-black";
        image = blackImg;
    }

    const createOnClickHandler = (text) => {
        return (e) => {
            e.preventDefault();
            onChange(text);
        };
    };

    return (
        <nav className={clazz}>
            <a href="#" onClick={createOnClickHandler("main")}>
                <div className="logo">
                    <img src={image} alt="logo" />
                    Coffee house
                </div>
            </a>
            <a href="#" onClick={createOnClickHandler("ourCoffee")}>
                Our coffee
            </a>
            <a href="#" onClick={createOnClickHandler("forYourPleasure")}>
                For your pleasure
            </a>
        </nav>
    );
};

export default Nav;
