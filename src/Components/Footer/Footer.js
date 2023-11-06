import "./Footer.css"

function Footer() {
    return (
        <div className="w-full h-72">
            <div className="divide-y-2  bg-neutral-100">
                <div id='nav-links' className="flex items-center lg:justify-start md:flex-col,flex-wrap md:justify-center pl-7 h-16 text-neutral-600">
                    <a><i className="fa-brands fa-github fa-lg mr-7 "></i></a>
                    <a><i className="fa-brands fa-facebook fa-lg mr-7 "></i></a>
                    <a><i className="fa-brands fa-twitter fa-lg mr-7 "></i></a>
                    <a><i className="fa-brands fa-linkedin fa-lg mr-7 "></i></a>
                </div>
                <div className="h-72 flex flex-row pt-12 text-neutral-600 max-[600px]:flex-col max-[600px]:h-fit max-[600px]:space-y-5 max-[600px]:text-left max-[600px]:space-x-5 md:justify-center lg:justify-start">
                    <div className="flex flex-col w-72 mr-12 ml-7 items-start">
                        <div className="flex flex-row "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-4 w-4 mt-1" ><path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" ></path></svg><h6 className="font-semibold ">TAILWIND ELEMENTS</h6></div>
                        <p className="mt-6">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col items-start contact-icons">
                        <h6 className="font-semibold "> CONTACT</h6>
                        <p><i className="fa-solid fa-house"></i>New York, NY 10012, US</p>
                        <p><i className="fa-solid fa-envelope "></i>info@example.com</p>
                        <p><i className="fa-sharp fa-solid fa-phone"></i>+ 01 234 567 88</p>
                        <p><i className="fa-solid fa-print"></i>+ 01 234 567 8</p>
                    </div>
                </div>
            </div>
            <div className="h-16 bg-neutral-200">Made with &#10084;	</div>
        </div>
    )
}
export { Footer }