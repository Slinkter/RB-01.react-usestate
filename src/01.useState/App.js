import React from "react";
import ConditionApp from "./components/ConditionApp";
import CounterApp from "./components/CounterApp";
import ErrorApp from "./components/ErrorApp";
import ProductApp from "./components/ProductApp";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";
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
