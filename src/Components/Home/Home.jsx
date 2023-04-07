import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import toast from 'react-hot-toast';
import './Home.css'
const Home = () => {
   const tshirts=useLoaderData()
   const [cart,setCart]=useState([])
   const handelAddToCart=tshirt=>{
    const exists=cart.find(ts=>ts._id===tshirt._id);
    if(exists){
toast('You have already add this product')
    }else{
        const newCart=[...cart,tshirt];
        setCart(newCart)
    }
  
   }

 const handleRemoveFromCart=id=>{
    const remaining=cart.filter(ts=>ts._id!==id)
    setCart(remaining)
 }
    return (
        <div className="home-container">
       <div className='t-shirts-container'>
               {
                tshirts.map(tshirt=> <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handelAddToCart={handelAddToCart}
                />)
               }
        </div>
        <div className="cart-container">
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
        </div>
        </div>
 
    );
};

export default Home;