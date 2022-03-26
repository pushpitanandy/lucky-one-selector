import React from 'react';
import './Shop.css';

const Shop = () => {



    return (
        <div className='shop-container'>

            {/* For all chocolates */}
            <div className='items-container'>
                <h3>This is for products</h3>
            </div>

            {/* For selected items */}
            <div className='selected-items-container'>
                <h3>Selected Items</h3>
            </div>
        </div>
    );
};

export default Shop;