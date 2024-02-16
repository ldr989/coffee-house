import AboutBlock from "../about-block/about-block";
import "./info-block.scss";

const InfoBlock = ({ h2, text, img, alt, line = false, isBrand = false }) => {
    return (
        <section className="info-block">
            <div className="info-block-wrapper">
                <div className="info-block-img">
                    <img src={img} alt={alt} />
                </div>
                <div className="info-block-descr">
                    <AboutBlock h2={h2} text={text} isBrand={isBrand} />
                </div>
            </div>
            {line ? <span className="info-block-line"></span> : null}
        </section>
    );
};

export default InfoBlock;
