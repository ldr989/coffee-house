import { Component } from "react";
import Nav from "../nav/nav";
import H1header from "../h1-header/h1-header";
import Divider from "../divider/divider";

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
                <H1header text={"Everything You Love About Coffee"} />
                <Divider isBlack={false} />
                <div className="call-to-action">
                    We makes every day full of energy and taste <br />
                    Want to try our beans?
                </div>
                <button>More</button>
            </header>
        );
    }
}

export default Header;
