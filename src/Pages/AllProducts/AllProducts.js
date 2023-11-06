// import React from 'react'
// import { Cards } from '../../Components/Cards/Cards'
// import axios from 'axios';
// import { useState } from 'react';

// export default function AllProducts() {

//     let [products, setProducts] = useState([]);

//     axios.post("/products-data").then((res) => {
//         setProducts(...res.data)
//         console.log(res.data);
//     })
//     console.log("Products", products);
//     return (
//         <div>
//             Hello
//             <Cards {...products} />
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react';
import { Cards } from '../../Components/Cards/Cards';
import axios from 'axios';

export default function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.post("/products-data")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []); // The empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            Hello
            <Cards products={products} />
        </div>
    );
}
