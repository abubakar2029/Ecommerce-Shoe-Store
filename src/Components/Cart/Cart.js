import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Cart() {

  const [bill, setBill] = useState(null); // Initialize as needed
  const [allCart, setAllCart] = useState([]);
  console.log(allCart);
  useEffect(() => {

    axios.post("/get-cart").then((res) => {
      const { bill, allCart } = res.data;
      setBill(bill);
      setAllCart(allCart);
    })
  }, [])


  const updateDatabase = () => {
    axios.post("/set-confirm-orders", allCart).then((res) => {
    })
  }
  const removeItem = (id) => {
    for (const index in allCart) {
      if (allCart[index].id == id) {
        allCart.splice(index, 1); //to update UI
        setAllCart([...allCart])
        axios.post("/removeItem", index).then((res) => {
          toast(res.data);
        });
        break;
      }
    }
  }

  return (
    <div>
      <h1 className='text-xl font-semibold mb-6'>Shopping Cart</h1>
      <div className='flex justify-around'>
        <table className='w-3/5 max-[800px]:w-9/12'>
          <thead>
            <h1 className='font-medium justify-center'>Cart Items</h1>
          </thead>
          <tbody>
            <tr className='flex w-full text-sm'>
              <td className='w-6 max-[1070px]:text-sm'>Index</td>
              <td className='w-16 max-[1070px]:text-sm'>Remove</td>
              <td className='w-1/3 max-[1070px]:text-sm'>Name</td>
              <td className='w-16 max-[1070px]:text-sm'>Size</td>
              <td className='w-16 max-[1070px]:text-sm'>Price</td>
              <td className='w-16 max-[1070px]:text-sm'>Quantity</td>
            </tr>
            {
              allCart.map((item, index) => {
                return <tr className='flex w-full text-sm'>
                  <td className='w-6 max-[1070px]:text-sm'>{index}</td>
                  <td className='w-16 max-[1070px]:text-sm'><button onClick={() => removeItem(item.id)}>Delete</button></td>
                  <td className='w-1/3 max-[1070px]:text-sm'>{item.title}</td>
                  <td className='w-16 max-[1070px]:text-sm'>{item.size}</td>
                  <td className='w-16 max-[1070px]:text-sm'>{item.price}</td>
                  <td className='w-16 max-[1070px]:text-sm'>1</td>
                </tr>
              })
            }
          </tbody>
        </table>
        <aside className='w-56 justify-end max-[800px]:w-36'>
          <h5 className='font-medium'>Summary</h5>
          <div className='bg-emerald-100 divide-y-2 divide-slate-500 p-3 text-left rounded-sm'>
            <p className='pb-1 max-[768px]:text-sm max-[768px]:flex-col max-[768px]:flex max-[768px]:text-left'>SUBTOTAL<span className='pl-11 max-[768px]:pl-0'>Rs:&ensp;{bill}</span></p>
            <p className='text-sm pt-2 md:text-sm max-[768px]:text-xs '>The SubTotal reflects the total price of Your order. Included dues and taxes. before any application discounts. It does not include delivery cost and international transection fee </p>
          </div>
          <button className='text-white bg-gray-800 w-full rounded-3xl my-2 py-1 border-solid border-gray-500 border-2 hover:bg-white hover:text-black' title='checkout' onClick={updateDatabase}>Checkout</button>
        </aside>
      </div>
      <ToastContainer />
    </div>
  )
}

