import "./app-get-product-list.scss";
import Card from "../card/card";

const AppGetProductList = (props) => {
    const { data, onChange, text } = props;
    function appSplitCards(onChange, text) {
        return data.map((item, i) => (
            <Card
                product={item}
                isShop={true}
                onChange={onChange}
                text={text}
                key={i}
            />
        ));
    }
    return (
        <div className="product-list-wrapper">
            {appSplitCards(onChange, text)}
        </div>
    );
};

export default AppGetProductList;
