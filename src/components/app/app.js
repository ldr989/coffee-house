import { Component } from "react";
import Header from "../header/header";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";

import "./app.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div className="app">
                <Header />
                <AboutUs />
                <OurBest />
            </div>
        );
    }
}

export default App;
