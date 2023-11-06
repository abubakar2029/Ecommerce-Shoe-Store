import React from 'react'
function OrderComponent(order) {
    console.log((order));
    return (
        <div className='mx-14'>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-xl'>{order.productName}</h1>
                <p>Price:&ensp;{order.price}</p>
            </div>
            <div className='flex space-x-16'>
                <p>Size:&ensp;{order.size}</p>
                <p>Quantity:&ensp;{order.quantity}</p>
            </div>
        </div>
    )
}
export { OrderComponent }