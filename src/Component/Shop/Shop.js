import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

    const addToCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(product=><Products 
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;