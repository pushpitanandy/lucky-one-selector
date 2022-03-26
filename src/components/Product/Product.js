import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const { name, image, price, id } = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
        </div>

    );
};

export default Product;