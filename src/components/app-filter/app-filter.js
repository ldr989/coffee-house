import "./app-filter.scss";

const AppFilter = (props) => {
    const buttonsData = [
        { name: "Brazil" },
        { name: "Kenya" },
        { name: "Columbia" },
    ];
    const buttons = buttonsData.map(({ name }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-active" : null;
        return (
            <button
                type="button"
                className={clazz}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {name}
            </button>
        );
    });
    return (
        <div className="app-filter">
            <div className="app-filter-text">Or filter</div>
            <div className="app-filter-btns-wrapper">{buttons}</div>
        </div>
    );
};

export default AppFilter;
