import { Component } from "react";
import Nav from "../nav/nav";

import "./header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                main: true,
                ourCoffee: false,
                forYourPleasure: false,
            },
        };
    }

    render() {
        return (
            <header>
                <Nav />
            </header>
        );
    }
}

export default Header;
