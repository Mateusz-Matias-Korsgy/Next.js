'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin@gmail.com' && password === 'password'){
            localStorage.setItem('loggedin', 'true');
            router.push('/dashboard');
        } else {
            alert('invalid credentials')
        }
    };

    return ( 
        <div className="min-h-screen flex items-center justify-center bg-green-600"> 
            <div className="bg-white rounded-lg shadow-md p-10 w-96"> 
                <h2 className="text-lg text-gray-600 text-center mb-2">Welcome back !!!</h2> 
                <h1 className="text-center text-gray-600 mb-6">Sign in</h1> 
                <form onSubmit={handleLogin}> 
                    <div className="mb-4"> 
                        <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        required /> 
                    </div> 
                    <div className="mb-4"> 
                        <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        required /> 
                    </div> 
                    <div className="flex justify-between item-center mb-6"> 
                        <a href="#" className="text-sm text-gray-500 hover:underline"> 
                            Forgot Password? 
                        </a> 
                    </div> 
                    <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600" > 
                        Sign in 
                    </button> 
                </form> 
                <p className="mt-4 text-black text-sm"> 
                    I don't have an account?{" "} 
                    <a href="/register" className="text-green-500 hover:underline"> 
                        Sign up 
                    </a> 
                </p> 
            </div> 
        </div> 
    ); 
}  