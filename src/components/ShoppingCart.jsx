import React, { useEffect, useState } from "react";

const initialCart = [
    {
        id: 1,
        title: "product 1 ",
        description: "desc",
    },
    {
        id: 2,
        title: "product 2",
        description: "desc 2",
    },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);

    const handleDelete = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };
    const handleAdd = () => {
        const newProduct = { id: Date.now(), title: "nuevo producto" };
        setCart([...cart, newProduct]);
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
            <h1>Lista de producto</h1>
            <button onClick={() => handleAdd()}>Add</button>
            {cart.map((product) => (
                <div key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <button onClick={() => handleDelete(product.id)}>
                        Delete
                    </button>
                    <button onClick={() => handleUpdate(product.id)}>
                        update
                    </button>
                </div>
            ))}

            <pre>{JSON.stringify(cart, null, 2)}</pre>
        </div>
    );
};

export default ShoppingCart;
