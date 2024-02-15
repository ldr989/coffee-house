import { Component } from "react";
import Header from "../header/header";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";
import InfoBlock from "../info-block/info-block";
import ProductList from "../product-list/product-list";

import girlImg from "../../assets/images/girl-with-cup-cut.png";
import aromistico from "../../assets/images/aromistico-coffee-beans.jfif";
import solimo from "../../assets/images/solimo-coffee-beans.jfif";
import presto from "../../assets/images/presto-coffee-beans.jfif";

import "./app.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "main",
            data: [
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Kenya",
                    price: "8.99$",
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Columbia",
                    price: "11.99$",
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                },
            ],
            best: [
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
            ],
        };
    }

    onChange = (show) => {
        this.setState(() => {
            return {
                show: show,
            };
        });
    };

    render() {
        switch (this.state.show) {
            case "ourCoffee":
                return (
                    <div className="app">
                        <Header
                            onChange={this.onChange}
                            data={this.state.show}
                        />
                        <InfoBlock
                            h2={"About our beans"}
                            text={
                                <>
                                    Extremity sweetness difficult behaviour he
                                    of. On disposal of as landlord horrible.
                                    <br />
                                    <br />
                                    Afraid at highly months do things on at.
                                    Situation recommend objection do intention
                                    <br />
                                    so questions.
                                    <br />
                                    As greatly removed calling pleased improve
                                    an. Last ask him cold feel <br />
                                    met spot shy want. Children me laughing we
                                    prospect answered followed. At it went is
                                    song that held help face.
                                </>
                            }
                            img={girlImg}
                            alt={"Girl with a cup"}
                            line={true}
                        />
                        <ProductList data={this.state.data} />
                        <Footer onChange={this.onChange} />
                    </div>
                );
            case "forYourPleasure":
                return (
                    <div className="app">
                        <Header
                            onChange={this.onChange}
                            data={this.state.show}
                        />
                        <Footer
                            onChange={this.onChange}
                            data={this.state.show}
                        />
                    </div>
                );
            case "ourCoffeeCard":
                return (
                    <div className="app">
                        <Header
                            onChange={this.onChange}
                            data={this.state.show}
                        />
                        <Footer onChange={this.onChange} />
                    </div>
                );
            case "forYourPleasureCard":
                return (
                    <div className="app">
                        <Header
                            onChange={this.onChange}
                            data={this.state.show}
                        />
                        <Footer onChange={this.onChange} />
                    </div>
                );
            default:
                return (
                    <div className="app">
                        <Header
                            onChange={this.onChange}
                            data={this.state.show}
                        />
                        <AboutUs />
                        <OurBest onChange={this.onChange} />
                        <Footer onChange={this.onChange} />
                    </div>
                );
        }
    }
}

export default App;
