import React, { useState } from "react";

const initialProduct = {
    title: "title",
    description: "description",
    image: { small: "", medium: "", big: "" },
};

const ProductApp = () => {
    const [product, setProduct] = useState(initialProduct);

    const updateProduct = (property, value) => {
        setProduct({ ...product, [property]: value });
    };

    return (
        <div>
            <button onClick={() => updateProduct("title", " second title")}>
                update
            </button>

            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <img src={product.image?.medium} alt={product.description} />
            <pre>{JSON.stringify(product, null, 2)}</pre>
        </div>
    );
};

export default ProductApp;
