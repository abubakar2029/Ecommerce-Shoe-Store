import React, { useEffect, useState } from 'react'
import { OrderComponent } from '../../Components/OrderComponent/OrderComponent'
import axios from 'axios';

export default function PendingOrders() {
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.post("/get-confirm-orders").then((res) => {
      setOrders([...res.data])
      console.log("Orders", res.data);
    })
  }, [])

  // let orders = { productName: "Name", size: 6, quantity: 2, price: 600 }
  return (
    <div>
      <h1 className='font-bold text-2xl'>PendingOrders</h1>
      <div className='divide-y-2'>
        {
          orders.map((order) => {
            return <div>
              <OrderComponent {...order} />
            </div>
          })
        }
      </div>
    </div>
  )
}
