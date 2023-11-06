import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { Cards } from "../../Components/Cards/Cards";
import { useEffect, useState } from "react";

export default function Home() {
    let [products, setProducts] = useState([]);

    /* jb page load ho ga to ya request chla ga aak bar baad ma show more pr click krna sa chla ga */
    const fetchData = () => {
        axios.post("/products-data").then((res) => {
            setProducts(res.data)// here getting allProducts array
        })
    };
    useEffect(() => {
        fetchData();
    }, [])

    // const navigate = useNavigate();
    return (
        <div>
            <HeroSection />
            <h1 className="font-bold text-3xl text-left pl-5">Products</h1>
            <Cards products={products} /> {/* data coming from backend */}
            <button onClick={fetchData}>Show More</button>
        </div>
    )
}
