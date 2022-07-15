import React from 'react';

const Cart = ({ pro }) => {
    const { name, picture } = pro
    return (
        <div className='container col-12'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-4 gy-2'>
                    <img className='img-fluid border border-rounded' src={picture} alt="" />
                </div>
                <div className='col-md-6'>
                    <h3 >{name}</h3>
                </div>
                <div className='col-md-2'>

                </div>

            </div>
        </div>
    );
};

export default Cart;