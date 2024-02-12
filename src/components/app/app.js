import { Component } from "react";
import Header from "../header/header";

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
            </div>
        );
    }
}

export default App;
