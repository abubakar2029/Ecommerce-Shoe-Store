import { HeroImage } from "../HeroImage/HeroImage";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function HeroSection() {
    let brands = [{ img: "0.jpg", title: "Service" },
    { img: "2.jpg", title: "adidas" },
    { img: "2.jpg", title: "adidas" },
    { img: "3.jpg", title: "nike" }]
    const adidas = "adidas";
    const navigate = useNavigate();
    return (
        <div>
            <HeroImage />
            <div className=" flex mb-14 mt-8 mx-3"> {/*    justify-content: space-between; needed-here */}
                {brands.map((brand) => {
                    return <div className="card">
                        <img src={brand.img} className="card-img" />
                        <div className="card-content">
                            <button onClick={(evt) => {
                                let brandName = evt.target.innerText.toLowerCase()
                                axios.post("/get-brand-data", {
                                    brandName
                                }).then((resp) => {
                                    console.log("Response",resp.data);
                                    navigate("/brand", { state: { products: resp.data, brandName } })
                                })
                            }} className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded  mb-8">{brand.title}</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export { HeroSection }