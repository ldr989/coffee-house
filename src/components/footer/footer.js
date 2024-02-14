import Nav from "../nav/nav";
import Divider from "../divider/divider";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <Nav isBlack={true} />
            <Divider isBlack={true} />
        </footer>
    );
};

export default Footer;
