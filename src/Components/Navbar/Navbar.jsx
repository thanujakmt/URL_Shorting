
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
    
    const [isActive, setActive] = useState(false)

    const Menu = () => {
        setActive(!isActive)
    }

    return (
        <>
            <div className="main_navbar flex justify-center p-8 relative font-font_Po">
                <div className=" flex container justify-between md:gap-16">
                    <div className="logo">
                        <img src="/images/logo.svg" alt="" />
                    </div>
                    <div className="pages flex-1 hidden pt-1 px-2 md:block">
                        <ul className=" flex items-center md:gap-10 lg:gap-16">
                            <li className=" navlinks">Features</li>
                            <li className=" navlinks">Pricing</li>
                            <li className=" navlinks">Resources</li>
                        </ul>
                    </div>
                    <div className="signup  md:flex  md:gap-1 lg:gap-10 hidden">
                        <div className=" navlinks pt-1 px-2">Login</div>
                        <div className=" font-medium bg-Cyan text-white rounded-[40px] cursor-pointer pt-1 px-6">Sign Up</div>
                    </div>
                    <HiMenu onClick={Menu} className={` md:hidden text-3xl text-Grayish_Violet ${isActive ? "hidden" : "block"} `} />
                    <IoClose onClick={Menu} className={` md:hidden text-3xl text-Grayish_Violet ${isActive ? "block" : "hidden"} `} />
                </div>
            </div>
            <div className={` ${isActive ? "block" : "hidden"} md:hidden flex flex-col gap-6 bg-Dark_Violet m-5 py-10 absolute w-[330px] rounded-[10px] `}>
                <div className="">
                    <ul className=" flex flex-col justify-center items-center gap-5">
                        <li className=" text-white">Features</li>
                        <li className=" text-white">Pricing</li>
                        <li className=" text-white">Resources</li>
                    </ul>
                </div> 
                <hr className=" mx-6"/>
                <div className="signup flex flex-col justify-center items-center gap-5">
                    <div className="text-white">Login</div>
                    <div className="font-medium w-52 text-center bg-Cyan text-white rounded-[40px] cursor-pointer px-6 py-2">Sign Up</div>
                </div>
            </div>
        </>
    )
}

export default Navbar