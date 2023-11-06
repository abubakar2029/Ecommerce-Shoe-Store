import { useState } from "react";
import "./Cards.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Cards(props) {
    console.log("Props",props);
    let navigate = useNavigate();

    /* yahan sa request jae ga or wo product ka detail aay ga */
    function getProduct(id) {
        axios.post("/selected-card", { id }).then((res) => {
            console.log("Product response ya aaya ha", res.data);
            navigate("/slected-card", { state: { products: res.data } },
            )
        })
    }
    // console.log(props.products[0].img[0]);       
    return (
        <div className=" flex mb-14 mt-8 mx-3 mydiv">{/* removed:cards-container */}

            {
                props.products.map((card) => { // yahan props.products ma ak array ha jis ma different objects han
                    /* Example:1
: {img: Array(3), id: '1547c228-54a3-4377-8b44-b1171757cfba', title: 'ULTRABOOST 1.0 SHOES', price: 200, discount: 12, …} */
                        // console.log(card.img[0]);
                    return <div className="card" onClick={() => getProduct(card.id)}>
                        <img src={card.img[0]} className="card-img" />
                        <div className="card-content">
                            <p>{card.title}</p>
                            <p>{card.price}</p>
                            <p>{card.discount}</p>
                        </div>
                        <div></div>
                    </div>
                })}
        </div>
    )
}


export { Cards }
