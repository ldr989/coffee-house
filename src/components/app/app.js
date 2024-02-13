import { Component } from "react";
import Header from "../header/header";
import AboutUs from "../about-us/about-us";

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
            </div>
        );
    }
}

export default App;
