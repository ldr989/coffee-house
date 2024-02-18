import { Component } from "react";
import "./search-panel.scss";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        };
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term.toLowerCase());
    };

    render() {
        return (
            <div className="search-panel">
                <div className="search-panel">Looking for</div>
                <input
                    type="text"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}
                />
            </div>
        );
    }
}

export default SearchPanel;
