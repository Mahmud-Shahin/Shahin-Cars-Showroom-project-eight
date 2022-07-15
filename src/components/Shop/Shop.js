import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randoms, setRandoms] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // buy Car
    const handleCart = (product) => {
        if (cart.length <= 3) {
            const newCart = [...cart, product]
            setCart(newCart);
        }
        else {
            return alert('Not more click')
        }
    }
    const choseRandom = () => {
        const player = cart[Math.floor(Math.random() * cart.length)]
        setRandoms(player)

    }

    const choseAgain = () => {
        setCart([])
    }

    return (
        <div className='px-4'>
            <h1 className='text-warning text-center'>Shahin Cars showroom</h1>
            <div className='row'>
                <div className='col-9'>
                    <div className='row row-cols-md-3 g-4'>
                        {
                            products.map(product => <Products handleCart={handleCart} key={product.id} product={product}></Products>)
                        }

                    </div>

                </div>
                <div className='col-3'>
                    <div className='row'>
                        <div className="cols-4">

                            {
                                cart.map(p => <Cart key={p.id} pro={p}></Cart>)
                            }

                        </div>

                    </div>

                    <p>{randoms.name}</p>

                    <button className='btn bg-warning mb-2' onClick={choseRandom} >Pick One Car</button>
                    <br />
                    <button className='btn bg-warning' onClick={choseAgain}>Chose Again</button>

                </div>


            </div>


        </div>
    );
};

export default Shop;