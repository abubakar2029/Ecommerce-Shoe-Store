import React from 'react'
import { OrderComponent } from '../../Components/OrderComponent/OrderComponent'

function CompletedOrders() {
    let orders = { productName: "Name", size: 6, quantity: 2, price: 600 }

    return (
        <div>CompletedOrders
            <div className='divide-y-2'>
                <OrderComponent {...orders}/>
                <OrderComponent {...orders}/>
            </div>
        </div>
    )
}

export { CompletedOrders }