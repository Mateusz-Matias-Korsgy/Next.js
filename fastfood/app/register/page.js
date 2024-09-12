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
        <div className="min-h-screen flex flex-col bg-green-600"> 
            <div className="p-4">
                <img src="/logo.png" alt="Ujali Food" className="h-20 w-40 object-contain" /> 
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-white rounded-lg shadow-md p-10 w-96"> 
                    <h1 className="text-4xl font-bold text-center mb-2">Hello!</h1> 
                    <p className="text-gray-500 mb-6 text-center">Sign Up to Get Started</p> 
                    <form onSubmit={handleRegistration}> 
                        <div className="mb-4"> 
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" 
                            required /> 
                        </div> 
                        <div className="mb-4"> 
                            <input 
                            type="email" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" 
                            required /> 
                        </div> 
                        <div className="mb-6"> 
                            <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                            required /> 
                        </div> 
                        <button 
                        type="submit" 
                        className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600" > 
                            Register 
                        </button> 
                    </form> 
                </div> 
            </div>
        </div> 
    ); 
}  