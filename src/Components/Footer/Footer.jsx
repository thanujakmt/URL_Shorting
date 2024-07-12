
import { ImFacebook2 } from "react-icons/im";
import { FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footer flex flex-col justify-center items-cente bg-Very_Dark_Violet p-5 py-10 font-font_Po">
                <div className="container flex flex-col justify-center md:flex-row md:items-start items-center gap-8">
                    <div className=" lg:mr-52">
                        <h1 className=" text-white text-4xl font-semibold">Shortly</h1>
                    </div>
                    <div className=" md:grid md:grid-cols-3 lg:gap-32 md:gap-32 gap-10 flex flex-col">
                        <div>
                            <h1 className=" font-semibold pb-4 text-white">Features</h1>
                            <ul className=" list">
                                <li className="color_changing">Link Shortening</li>
                                <li className="color_changing">Branded Links</li>
                                <li className="color_changing">Analytics</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className=" font-semibold pb-4 text-white">Resources</h1>
                            <ul className=" list">
                                <li className="color_changing">Blog</li>
                                <li className="color_changing">Developers</li>
                                <li className="color_changing">Support</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className=" font-semibold pb-4 text-white">Company</h1>
                            <ul className=" list">
                                <li className="color_changing">About</li>
                                <li className="color_changing">Our Team</li>
                                <li className="color_changing">Careers</li>
                                <li className="color_changing">Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" md:ml-20 flex md:items-start justify-center items-center">
                        <ul className=" text-white flex gap-10">
                            <li className=" text-[1.6em] cursor-pointer hover:text-Cyan"><ImFacebook2 /></li>
                            <li className=" text-[1.6em] cursor-pointer hover:text-Cyan"><FaTwitter /></li>
                            <li className=" text-[1.6em] cursor-pointer hover:text-Cyan"><FaPinterest /></li>
                            <li className=" text-[1.6em] cursor-pointer hover:text-Cyan"><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;