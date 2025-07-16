import React from 'react'
import toast from 'react-hot-toast';
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/slices/CartSlice";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart() {
       dispatch(remove(item.id));
       toast.success("Item Removed");
  }

  return (
    <div>
        <div className='flex space-x-5'>
            <div className='h-[180px] w-[180px]'>
                <img src={item.image} className='w-full h-full '/>
            </div>
            <div className='w-1/2 '>
               <p className='text-gray-700 font-semibold text-lg mt-1'>{item.title.split(" ").slice(0, 6).join(" ")}</p>
               <p className='text-gray-400 font-normal text-[14px] text-left'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
               <div className='flex justify-between mt-7'>
                  <p className='text-green-600 font-semibold'>${item.price}</p>
                  <div className='mr-5 px-2 py-2 bg-red-300 rounded-full' 
                  onClick={removeFromCart}>
                     <MdDeleteOutline className='text-red-800'/>
                  </div>
               </div>
            </div>

        </div>
         <div className='h-[2px] w-[500px] bg-gray-400 mt-6'></div>
    </div>
  )
}

export default CartItem