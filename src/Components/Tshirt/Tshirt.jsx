import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handelAddToCart}) => {
    const {picture,name,price,gender,_id}=tshirt;
    
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price:${price}</p>
            <button onClick={()=>handelAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;