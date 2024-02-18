import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AppGetProductList from "../app-get-product-list/app-get-product-list";
import "./product-list.scss";

const ProductList = ({
    data,
    onChange,
    text,
    onUpdateSearch,
    onFilterSelect,
    filter,
}) => {
    return (
        <section className="product-list">
            <div className="product-list-control-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />{" "}
                <AppFilter onFilterSelect={onFilterSelect} filter={filter} />
            </div>
            <AppGetProductList data={data} onChange={onChange} text={text} />
        </section>
    );
};

export default ProductList;
