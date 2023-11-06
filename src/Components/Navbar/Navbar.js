import { Link } from 'react-router-dom'
import "./Navbar.css"
import axios from 'axios'
import { useEffect, useState } from 'react'
/* <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg> */
function Navbar() {
    let [loginStatus, setLoginStatus] = useState("")
    useEffect(() => {
        axios.post("/user-login").then((res) => {
            setLoginStatus(res.data);
            console.log(1);
        })
    }, [])
    return (

        <nav className='navbar shadow flex text-neutral-600 lg:h-20 font-medium px-10 items-center md:justify-center md:text-sm md:h-16 lg:text-base lg:justify-start w-full'>
            {/* =================== */}
            <div className='absolute right-0 mr-2 lg:hidden '>
                <button >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>

                </button>
            </div>
            {/* =================== */}

            <Link to="/app" className='mr-3'><img src='addidas.webp' width="70px" height="58px" /></Link>
            {loginStatus != "Not Found" ?
                <Link className='p-2' to="/">LogOut</Link> :
                <Link className='p-2' to="/login">Login</Link>}
            <Link className='p-2' to='/admin'>Admin Panel</Link>
            <Link className='p-2' to='/cart'>My Cart</Link>
            <Link className='p-2' to='/home'>Home</Link>
        </nav>
    )
}
export { Navbar }