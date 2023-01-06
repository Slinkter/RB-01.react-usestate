import React, { useEffect, useState } from "react";

const obj01 = {
    id: 1,
    title: "product 1 ",
    description: "desc",
};

const obj02 = {
    id: 2,
    title: "product 2",
    description: "desc 2",
};
const initialCart = [obj01, obj02];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);
    const handleAdd = () => {
        const newProduct = { id: Date.now(), title: "nuevo producto" };
        setCart([...cart, newProduct]);
    };
    const handleDelete = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const handleUpdate = (id) => {
        const productEdit = {
            id: id,
            title: "product edit",
            description: "desc edit",
        };

        setCart(
            cart.map((product) => (product.id === id ? productEdit : product))
        );
    };

    useEffect(() => {
        console.log("cambio la lista ");
        return () => {};
    }, [cart]);

    return (
        <div className="App">
            <div className="caja">
                <h1>Lista de producto</h1>
                <button className="btn btn-primary" onClick={() => handleAdd()}>
                    Add
                </button>
            </div>

            {cart.map((product) => (
                <div key={product.id} className="caja">
                    <p>Nombre producto : {product.title}</p>
                    <p>Descripcion : {product.description}</p>
                    <button
                        className="btn btn-primary space-btn "
                        onClick={() => handleDelete(product.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-primary space-btn "
                        onClick={() => handleUpdate(product.id)}
                    >
                        update
                    </button>
                </div>
            ))}

            <pre>{JSON.stringify(cart, null, 2)}</pre>
        </div>
    );
};

export default ShoppingCart;
