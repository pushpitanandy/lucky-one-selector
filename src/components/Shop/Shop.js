import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // to fetch and load data
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>

            {/* For all items */}
            <div className='items-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

            {/* For selected items */}
            <div className='selected-items-container'>
                <h3>Selected Items</h3>
            </div>
        </div>
    );
};

export default Shop;