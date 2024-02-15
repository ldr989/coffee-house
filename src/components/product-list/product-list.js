import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
// import Card from "../card/card";
import "./product-list.scss";

const ProductList = ({ data }) => {
    return (
        <section className="product-list">
            <div className="product-list-control-panel">
                <SearchPanel /> <AppFilter />
            </div>
            <div className="product-list-wrapper"></div>
        </section>
    );
};

export default ProductList;
