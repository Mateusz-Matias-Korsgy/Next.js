'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegistration = (e) => {
        e.preventDefault();
        alert('Registration successful!');
        router.push('/login');
    };
    
    return ( 
        <div className="min-h-screen flex flex-col rounded-[50px] border-24 border-custom-green overflow-hidden"> 
            <div className="p-4">
                <img src="/logo.png" alt="Ujali Food" className="h-20 w-40 object-contain" /> 
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-white items-center justify-center drop-shadow-green p-10 w-96 overflow-hidden"> 
                    <h1 className="text-left text-[rgba(51, 51, 51, 1)] text-[56px] font-bold font-[Poppins] mb-2">Hello!</h1> 
                    <p className="text-left text-[rgba(99, 99, 99, 1)] text-[25px] font-[Poppins] mb-2">Sign Up to Get Started</p> 
                    <form onSubmit={handleRegistration}> 
                        <div className="mb-4"> 
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 font-[Poppins] text-text-gray border border-border-gray rounded-md focus:outline-none focus:border-green-500" 
                            required /> 
                        </div> 
                        <div className="mb-4"> 
                            <input 
                            type="email" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 font-[Poppins] text-text-gray border border-border-gray rounded-md focus:outline-none focus:border-green-500" 
                            required /> 
                        </div> 
                        <div className="mb-6"> 
                            <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 font-[Poppins] text-text-gray border border-border-gray rounded-md focus:outline-none focus:border-green-500"
                            required /> 
                        </div> 
                        <button 
                        type="submit" 
                        className="w-full py-2 font-[Poppins] bg-custom-green text-white rounded-md" > 
                            Register 
                        </button> 
                    </form> 
                </div> 
            </div>
        </div> 
    ); 
}  