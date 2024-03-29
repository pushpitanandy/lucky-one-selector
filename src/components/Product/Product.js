import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    const { name, image, price } = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-details'>
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>

        </div>

    );
};

export default Product;