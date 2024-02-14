import H2Header from "../h2-header/h2-header";
import Card from "../card/card";
import solimo from "../../assets/images/solimo-coffee-beans.jfif";
import presto from "../../assets/images/presto-coffee-beans.jfif";
import aromistico from "../../assets/images/aromistico-coffee-beans.jfif";
import "./our-best.scss";

const OurBest = () => {
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
            <div className="wrapper">
                <Card product={bestProducts[0]} />
                <Card product={bestProducts[1]} />
                <Card product={bestProducts[2]} />
            </div>
        </section>
    );
};

export default OurBest;
