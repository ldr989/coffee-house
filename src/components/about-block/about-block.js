import H2Header from "../h2-header/h2-header";
import Divider from "../divider/divider";
import "./about-block.scss";

const AboutBlock = ({ h2, text, isBrand }) => {
    let clazz = "about-block-text";

    if (isBrand) {
        clazz += " about-block-text-brand";
    }

    return (
        <div className="about-block">
            <H2Header text={h2} />
            <Divider isBlack={true} />
            <div className={clazz}>{text}</div>
        </div>
    );
};

export default AboutBlock;
