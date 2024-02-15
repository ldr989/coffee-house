import "./app-filter.scss";

const AppFilter = () => {
    return (
        <div className="app-filter">
            <div className="app-filter-text">Or filter</div>
            <div className="app-filter-btns-wrapper">
                <button>Brazil</button>
                <button>Kenya</button>
                <button>Columbia</button>
            </div>
        </div>
    );
};

export default AppFilter;
