import React from "react";
import ConditionApp from "./01.useState/components/ConditionApp";
import CounterApp from "./01.useState/components/CounterApp";
import ErrorApp from "./01.useState/components/ErrorApp";
import ProductApp from "./01.useState/components/ProductApp";
import ShoppingCart from "./01.useState/components/ShoppingCart";

const App = () => {
    return (
        <div>
            {/* <CounterApp /> */}
            {/* <ConditionApp /> */}
            {/* <ErrorApp /> */}
            {/*   <ProductApp /> */}
            <ShoppingCart />
        </div>
    );
};

export default App;
