import "./divider.scss";

const Divider = ({ img, black }) => {
    let clazz = "divider";

    if (black) {
        clazz += " divider-black";
    }
    return (
        <div className={clazz}>
            <hr /> <img src={img} alt="" /> <hr />
        </div>
    );
};

export default Divider;
