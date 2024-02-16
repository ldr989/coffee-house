import "./card.scss";

const Card = ({ product, isShop, onChange, text }) => {
    const { name, img, price, country } = product;
    let clazz = "card";
    if (isShop) {
        clazz += " card-in-shop";
    }
    return (
        <div className={clazz} onClick={() => onChange(text)}>
            <div className="card-image">
                <img src={img} alt="coffee brand" />
            </div>
            <div className="card-name">{name}</div>
            {country !== "" ? (
                <div className="card-country">{country}</div>
            ) : null}
            <div className="card-price">{price}</div>
        </div>
    );
};

export default Card;
