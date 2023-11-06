import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SelectedCard() {
    const location = useLocation();//usenavigate sa jo data aaya wo yahan sa mila ga
    let product = location.state.products;

    let [selectedButton, setSelectedButton] = useState(0);

    let [mainImg, setMainImg] = useState("");
    useEffect(() => { // -------to avoid too many rerenders it will once setimg in start as main-----
        setMainImg(product.img[0])
    }, [])

    /* Change main-Image  */
    const ChangeImage = (evt) => {
        setMainImg(evt.target.src)
    }

    /* selected-size */
    const selectedSize = (size) => {
        product.size = size;
    }

    /* Add to cart */
    const addToCart = () => {
        axios.post("/add-to-cart", product).then((res) => {
            toast(res.data);
        })

    }
    const shoeSizes = [6, 6.5, 7, 7.5, 8, 8.5, 9]
    return (
        <div>
            <section className='flex divide-x-2 py-12'>
                <div className=' w-1/2 h-56 flex'>
                    <div className=' w-1/3'>
                        <aside className='flex flex-col pl-32 '>
                            <img src={product.img[0]} className='h-20 w-20 mb-1 border-solid border-gray-400 border-2 rounded-lg' onClick={(evt) => { ChangeImage(evt) }} />
                            <img src={product.img[1]} className='h-20 w-20 mb-1 border-solid border-gray-400 border-2 rounded-lg' onClick={(evt) => { ChangeImage(evt) }} />
                            <img src={product.img[2]} className='h-20 w-20 mb-1 border-solid border-gray-400 border-2 rounded-lg' onClick={(evt) => { ChangeImage(evt) }} />
                        </aside>
                    </div>
                    <div className=' w-4/6 '>
                        <img src={mainImg} className='h-96 w-96' />
                    </div>
                </div>
                <div className=' w-1/2 text-left'>
                    <h1 className='font-bold text-3xl pl-14'>{product.title}</h1> 
                    <p className='text-lg font-medium pl-16' >Price: Rs {product.price}</p>
                    <div>
                        <h3 className='pl-16 font-semibold text-lg'>Select Size</h3>
                        <div className='flex flex-wrap mx-14'>
                            {
                                shoeSizes.map((size) => {
                                    return <button className={selectedButton == size ? "bg-slate-800 text-white border-none font-bold border-gray-400 border-2 w-20 py-1 rounded mx-3 my-3" : "         bg-white w-20 py-1 hover:border-none  hover:bg-slate-800 hover:text-white font-bold rounded mx-3 my-3 border-solid border-gray-400 border-2"} onClick={() => {
                                        selectedSize(size);
                                        setSelectedButton(size)
                                    }}>{size}</button>

                                })
                            }

                            {/* <SizeButton onClick={()=>{}}/> */}

                        </div>
                        <div className='px-14'>
                            <button className='bg-black w-full text-white rounded-2xl my-2 py-2 font-medium cursor-pointer hover:bg-gray-800 hover:border border-gray-700 transition-all duration-300' onClick={addToCart}>
                                Add to Cart
                            </button>
                            <button className='bg-transparent w-full cursor-pointer rounded-2xl my-2 py-2 hover:bg-gray-100 hover:border border-gray-500 transition-all duration-300'>
                                Online Payment
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <div>
                <h1 className='text-left pl-64 font-semibold text-3xl'>You might also like</h1>

            </div>
            <ToastContainer />
        </div>
    )
}
export { SelectedCard }