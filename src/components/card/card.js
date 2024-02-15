import "./card.scss";

const Card = (prop, { isShop }) => {
    const { name, img, price, country } = prop.product;
    let clazz = "card";
    if (isShop) {
        clazz += " card-in-shop";
    }
    return (
        <div className={clazz}>
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
