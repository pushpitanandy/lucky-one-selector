import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    const { name, image } = item;
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Cart;