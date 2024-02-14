import "./card.scss";

const Card = (prop) => {
    const { name, img, price, country } = prop.product;
    return (
        <div className="card">
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
