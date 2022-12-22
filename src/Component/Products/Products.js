import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = (props) => {
    const {product,addToCart} = props;
    const {name,seller,price,ratings,img} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <small><p>Manufacturer: {seller}</p></small>
                <small><p>Rating: {ratings} star</p></small>              
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>                
            </button>
        </div>
    );
};

export default Products;