'use client'
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black shadow-md">
        <div className="md:hidden grid grid-cols-5 object-left">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                Menu
            </button>
            <img src='/logo.png' alt="Colnago Logo" className="h-10 rounded-2xl bg-white"/>
            <p className="text-white focus:outline-none mt-2">COLNAGO</p>
            <button className="text-white focus:outline-none">Search</button>
            <button className="text-white focus:outline-none">Cart</button>            
        </div>
        <div className="hidden md:flex space-x-6">
            <Link href='/bikes' className="hover:text-gray-700">Bikes</Link>
            <Link href='/news' className="hover:text-gray-700">News</Link>
            <Link href='/history' className="hover:text-gray-700">History</Link>
            <Link href='/about' className="hover:text-gray-700">About us</Link>
            <Link href='/contact' className="hover:text-gray-700">Bikes</Link>
        </div>       
        {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                <div className="flex flex-col space-y-2 p-4">
                    <Link href='/bikes' className="hover:text-gray-700">Bikes</Link>
                    <Link href='/news' className="hover:text-gray-700">News</Link>
                    <Link href='/history' className="hover:text-gray-700">History</Link>
                    <Link href='/about' className="hover:text-gray-700">About us</Link>
                    <Link href='/contact' className="hover:text-gray-700">Bikes</Link>
                </div>
            </div>
        )}
    </nav>
);
};
export default Navbar;