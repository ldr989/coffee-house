import H2Header from "../h2-header/h2-header";
import Card from "../card/card";
import solimo from "../../assets/images/solimo-coffee-beans.jfif";
import presto from "../../assets/images/presto-coffee-beans.jfif";
import aromistico from "../../assets/images/aromistico-coffee-beans.jfif";
import "./our-best.scss";

const OurBest = ({ onChange }) => {
    const bestProducts = [
        {
            name: "Solimo Coffee Beans 2 kg",
            img: solimo,
            country: "",
            price: "10.73$",
        },
        {
            name: "Presto Coffee Beans 1 kg",
            img: presto,
            country: "",
            price: "15.99$",
        },
        {
            name: "AROMISTICO Coffee 1 kg",
            img: aromistico,
            country: "",
            price: "6.99$",
        },
    ];
    return (
        <section className="our-best">
            <H2Header text={"Our best"} />
            <div className="our-best-wrapper">
                <Card
                    product={bestProducts[0]}
                    isShop={false}
                    onChange={onChange}
                    text={"ourCoffeeCard"}
                />
                <Card
                    product={bestProducts[1]}
                    isShop={false}
                    onChange={onChange}
                    text={"ourCoffeeCard"}
                />
                <Card
                    product={bestProducts[2]}
                    isShop={false}
                    onChange={onChange}
                    text={"ourCoffeeCard"}
                />
            </div>
        </section>
    );
};

export default OurBest;
