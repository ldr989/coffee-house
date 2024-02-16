import Nav from "../nav/nav";
import H1header from "../h1-header/h1-header";
import Divider from "../divider/divider";

import "./header.scss";

const Header = ({ onChange, data }) => {
    switch (data) {
        case "ourCoffee":
            return (
                <header className="header-small ourCoffee">
                    <Nav onChange={onChange} isBlack={false} />
                    <H1header text={"Our Coffee"} />
                </header>
            );
        case "forYourPleasure":
            return (
                <header className="header-small forYourPleasure">
                    <Nav onChange={onChange} isBlack={false} />
                    <H1header text={"For your pleasure"} />
                </header>
            );
        case "ourCoffeeCard":
            return (
                <header className="header-small ourCoffee">
                    <Nav onChange={onChange} isBlack={false} />
                    <H1header text={"Our Coffee"} />
                </header>
            );
        case "forYourPleasureCard":
            return (
                <header className="header-small forYourPleasure">
                    <Nav onChange={onChange} isBlack={false} />
                    <H1header text={"For your pleasure"} />
                </header>
            );
        default:
            return (
                <header>
                    <Nav onChange={onChange} isBlack={false} />
                    <H1header text={"Everything You Love About Coffee"} />
                    <Divider isBlack={false} />
                    <div className="call-to-action">
                        We makes every day full of energy and taste <br />
                        Want to try our beans?
                    </div>
                    <button onClick={() => onChange("ourCoffee")}>More</button>
                </header>
            );
    }
};

export default Header;
