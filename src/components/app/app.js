import { Component } from "react";
import Header from "../header/header";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";

import "./app.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                main: true,
                ourCoffee: false,
                ocProduct: false,
                forYourPleasure: false,
                fypProduct: false,
            },
        };
    }

    render() {
        return (
            <div className="app">
                <Header />
                <AboutUs />
                <OurBest />
                <Footer />
            </div>
        );
    }
}

export default App;
