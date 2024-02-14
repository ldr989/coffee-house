import blackBeam from "../../assets/icons/beams-black.svg";
import whiteBeam from "../../assets/icons/white-beams-divider.svg";
import "./divider.scss";

const Divider = ({ isBlack }) => {
    let clazz = "divider";
    let img = whiteBeam;
    if (isBlack) {
        clazz += " divider-black";
        img = blackBeam;
    }
    return (
        <div className={clazz}>
            <hr /> <img src={img} alt="" /> <hr />
        </div>
    );
};

export default Divider;
