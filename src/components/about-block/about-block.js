import H2Header from "../h2-header/h2-header";
import Divider from "../divider/divider";
import blackBeam from "../../assets/icons/beams-black.svg";
import "./about-block.scss";

const AboutBlock = ({ h2, text }) => {
    return (
        <div className="about-block">
            <H2Header text={h2} />
            <Divider img={blackBeam} black={true} />
            <div className="about-block-text">{text}</div>
        </div>
    );
};

export default AboutBlock;
