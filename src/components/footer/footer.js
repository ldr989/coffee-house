import Nav from "../nav/nav";
import Divider from "../divider/divider";
import "./footer.scss";

const Footer = ({ onChange }) => {
    return (
        <footer>
            <Nav onChange={onChange} isBlack={true} />
            <Divider isBlack={true} />
        </footer>
    );
};

export default Footer;
