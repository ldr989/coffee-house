import { Component } from "react";
import Header from "../header/header";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";
import InfoBlock from "../info-block/info-block";
import ProductList from "../product-list/product-list";
import AppGetProductList from "../app-get-product-list/app-get-product-list";
// import Card from "../card/card";

import girlImg from "../../assets/images/girl-with-cup-cut.png";
import cupWithStream from "../../assets/images/cup-and-stream-cut.png";
import aromisticoBrand from "../../assets/images/aromistico-coffee-brand-cut.png";
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
                    key: 1,
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Kenya",
                    price: "8.99$",
                    key: 2,
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Columbia",
                    price: "11.99$",
                    key: 3,
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                    key: 4,
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                    key: 5,
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "Brazil",
                    price: "6.99$",
                    key: 6,
                },
            ],
            best: [
                {
                    name: "Solimo Coffee Beans 2 kg",
                    img: solimo,
                    country: "",
                    price: "10.73$",
                    key: 1,
                },
                {
                    name: "Presto Coffee Beans 1 kg",
                    img: presto,
                    country: "",
                    price: "15.99$",
                    key: 2,
                },
                {
                    name: "AROMISTICO Coffee 1 kg",
                    img: aromistico,
                    country: "",
                    price: "6.99$",
                    key: 3,
                },
            ],
            term: "",
            filter: "all",
        };
    }

    onChange = (show) => {
        this.setState(() => {
            return {
                show: show,
            };
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1; // indexOf ищет сабстроку(term) в строке item.name если находит то выдает позицию, но нам нужно только булиновое значение, поэтому тут стоит оператор >. Если term найдется в строке то вернется его позиция а значит оно будет больше чем -1 и вернется true - выполнится условие фильтера и он вернет новый массив (terms) с найденным элементов внутри(item). Если term не найдется в строке то вернется -1 а значит false, фильтр перейдет к другому item
        });
    };

    onFilterSelect = (filter) => {
        if (this.state.filter === filter) {
            this.setState({ filter: "all" });
        } else {
            this.setState({ filter });
        }
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case "Brazil":
                return items.filter((item) => item.country === "Brazil"); // тут внутри скобок сокращенная запись которая заменяет конструкцию if else. если значение item.rise === true то возвращается этот item
            case "Kenya":
                return items.filter((item) => item.country === "Kenya");
            case "Columbia":
                return items.filter((item) => item.country === "Columbia");
            default:
                return items;
        }
    };

    render() {
        const { show, data, term, filter } = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        switch (show) {
            case "ourCoffee":
                return (
                    <div className="app">
                        <Header onChange={this.onChange} data={show} />
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
                        <ProductList
                            data={visibleData}
                            onChange={this.onChange}
                            text={"ourCoffeeCard"}
                            onUpdateSearch={this.onUpdateSearch}
                            filter={filter}
                            onFilterSelect={this.onFilterSelect}
                        />
                        <Footer onChange={this.onChange} />
                    </div>
                );
            case "forYourPleasure":
                return (
                    <div className="app">
                        <Header onChange={this.onChange} data={show} />
                        <InfoBlock
                            h2={"About our goods"}
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
                            img={cupWithStream}
                            alt={"Cup of coffee"}
                            line={true}
                        />
                        <AppGetProductList
                            data={visibleData}
                            onChange={this.onChange}
                            text={"forYourPleasureCard"}
                            filter={filter}
                            onFilterSelect={this.onFilterSelect}
                        />
                        <Footer onChange={this.onChange} data={show} />
                    </div>
                );
            case "ourCoffeeCard":
                return (
                    <div className="app">
                        <Header onChange={this.onChange} data={show} />
                        <InfoBlock
                            h2={"About it"}
                            text={
                                <>
                                    <b>Country:</b> Brasil
                                    <br />
                                    <br />
                                    <b>Country:</b> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    <br />
                                    <br />
                                    <b>Price: 16.99$</b>
                                </>
                            }
                            img={aromisticoBrand}
                            alt={"Aromistico brand"}
                            line={false}
                            isBrand={true}
                        />
                        <Footer onChange={this.onChange} />
                    </div>
                );
            case "forYourPleasureCard":
                return (
                    <div className="app">
                        <Header onChange={this.onChange} data={show} />
                        <InfoBlock
                            h2={"About it"}
                            text={
                                <>
                                    <b>Country:</b> Brasil
                                    <br />
                                    <br />
                                    <b>Country:</b> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    <br />
                                    <br />
                                    <b>Price: 16.99$</b>
                                </>
                            }
                            img={aromisticoBrand}
                            alt={"Aromistico brand"}
                            line={false}
                            isBrand={true}
                        />
                        <Footer onChange={this.onChange} />
                    </div>
                );
            default:
                return (
                    <div className="app">
                        <Header onChange={this.onChange} data={show} />
                        <AboutUs onChange={this.onChange} />
                        <OurBest onChange={this.onChange} />
                        <Footer onChange={this.onChange} />
                    </div>
                );
        }
    }
}

export default App;
