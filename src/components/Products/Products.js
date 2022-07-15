import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const { picture, name, price } = props.product;
    return (
        <div className="container">
            <div className='card h-100'>
                <img className='img-fluid h-100' src={picture} alt="" />
                <h3>Name: {name}</h3>
                <p>price: {price}</p>
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <button onClick={() => props.handleCart(props.product)}
                        className='btn btn-warning'>Buy Car <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
                </div>

            </div>
        </div>
    );
};

export default Products;