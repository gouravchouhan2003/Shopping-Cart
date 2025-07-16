import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);  // create a state variable

  useEffect( () => {
      setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));  // reduce() function used to calculte total sum
  }, [cart])

  return (
    <div>
        {
           cart.length > 0 ?
           (
            <div className='flex space-x-10 mt-10 justify-center items-center min-h-screen'>
                <div className='grid grid-cols-1 max-w-2xl flex p-2 space-y-4 '>
                   {
                      cart.map( (item, index) => {
                         return <CartItem key={item.id} item={item} itemIndex={index}/>
                      })
                   }
                </div>

                <div className='flex flex-col relative mt-[300px] w-[300px]'>
                    <div className='flex flex-col  absolute -top-[400px]'>
                         <div className='text-xl text-green-500 font-semibold uppercase'>Your Cart</div>
                         <div className='text-4xl text-green-500 font-bold uppercase'>Summary</div>
                         <p>
                             <span className='text-black text-[17px] font-semibold'>Total Items : {cart.length}</span>
                         </p>
                    </div>
                    <div className='space-y-6'>
                        <p className='text-black text-[17px] font-semibold'>
                           <span className='text-[17px] text-green-500 font-bold'>Total Amount :</span> ${totalAmount}
                        </p>
                        <button className='w-full px-5 py-2 bg-green-500 rounded-md text-white font-bold text-[17px]'>
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>
           ) :
           (
            <div className='flex flex-col justify-center items-center h-[70vh] space-y-5'>
               <h2 className='text-3xl text-green-600 font-bold uppercase'>Empty Cart</h2>
               <Link to="/">
                  <button className='px-10 py-3 bg-green-500 rounded-md text-white font-bold w-[190px]'>
                      Shop Now
                  </button>
               </Link>
            </div>
           )
        }
    </div>
  )
}

export default Cart