import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AppGetProductList from "../app-get-product-list/app-get-product-list";
import "./product-list.scss";

const ProductList = ({ data, onChange, text }) => {
    return (
        <section className="product-list">
            <div className="product-list-control-panel">
                <SearchPanel /> <AppFilter />
            </div>
            <AppGetProductList data={data} onChange={onChange} text={text} />
        </section>
    );
};

export default ProductList;
