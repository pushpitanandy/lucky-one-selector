import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // to fetch and load data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (selectedProduct) => {
        if (cart.length < 4) {
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
        }
        else {
            alert('Only 4 items allowed');
        }
    }

    const handleChooseOne = () => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)];
        alert(randomItem.name);
    }

    const handleChooseAgain = () => setCart([]);

    return (
        <div className='shop-container'>

            {/* For all items */}
            <div className='items-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            {/* For selected items */}
            <div className='selected-items-container'>
                <h3>Selected Items</h3>
                {
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }
                <button onClick={handleChooseOne} className='btn-choose-one'>Choose 1 for Me</button>

                <button onClick={handleChooseAgain} className='btn-choose-again'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;