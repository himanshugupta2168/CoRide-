import logo from "../assets/Coride_Logo.png";
import { Link } from "react-router-dom";
import { InlineIcon } from '@iconify/react';

function Footer(){
    return(
        <div className="mt-10 pb-10 divide-y divide-slate-300 bg-white">
            <div className="flex flex-col sm:flex-row gap-20 p-10">
                <div>
                    <img src={logo} alt="logo" className="h-[50px]" />
                    <Link className="text-gray-400 hover:text-black">Visit help center</Link>
                </div>
                <div>
                    <p className="font-bold text-xl">About</p>
                    <ul>
                        <Link><li className="text-gray-400 hover:text-black">How it works</li></Link>
                        <Link><li className="text-gray-400 hover:text-black">About Us</li></Link>
                        <Link><li className="text-gray-400 hover:text-black">Newsroom</li></Link>
                        <Link><li className="text-gray-400 hover:text-black">Blogs</li></Link>
                        <Link><li className="text-gray-400 hover:text-black">Career</li></Link>
                        <Link><li className="text-gray-400 hover:text-black">Gift Card</li></Link>
                    </ul>
                </div>
                <div className="flex flex-col text-green-400">
                    <p className="font-bold text-black text-xl">Socials</p>
                    <div className="flex text-2xl">
                        <Link>
                            <Icon name={"uiw:facebook"}></Icon>
                        </Link>
                        <Link>
                            <Icon name={"pajamas:twitter"}></Icon>
                        </Link>
                        <Link>
                            <Icon name={"uit:youtube"}></Icon>
                        </Link>
                        <Link>
                            <Icon name={"streamline:instagram"}></Icon>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-10 pt-5">
                <p>&copy; CoRide, 2024</p>
                <ul className="flex gap-4">
                    <Link><li className="hover:text-green-400">Privacy</li></Link>
                    <Link><li className="hover:text-green-400">Accessibility</li></Link>
                    <Link><li className="hover:text-green-400">Terms</li></Link>
                </ul>
            </div>
        </div>
    )
}

function Icon({name}){
    return (
        <div className="flex p-3 hover:bg-gray-200 rounded">
            <InlineIcon icon={name} >{' '}</InlineIcon>
        </div>
    )
}

export default Footer;