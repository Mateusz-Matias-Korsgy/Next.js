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
        <div className="h-screen flex items-center justify-center rounded-[50px] border-24 border-custom-green overflow-hidden "> 
            <div className="bg-white items-center justify-center drop-shadow-green p-10 w-96 overflow-hidden"> 
                <h2 className="text-left text-[rgba(0, 0, 0, 0.5)] text-[25px] font-[Poppins] mb-2">Welcome back !!!</h2> 
                <h1 className="text-left text-black text-[56px] font-bold font-[Poppins] mb-6">Sign in</h1> 
                <form onSubmit={handleLogin}> 
                    <div className="mb-4"> 
                        <p className="font-semibold">Email</p>
                        <input 
                        type="email" 
                        placeholder="admin@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-text-gray border border-border-gray rounded-md focus:outline-none focus:border-green-500"
                        required /> 
                    </div> 
                    <div className="mb-4"> 
                        <p>Password</p>
                        <input 
                        type="password" 
                        placeholder="*****************" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 text-text-gray border border-border-gray rounded-md focus:outline-none focus:border-green-500"
                        required /> 
                    </div> 
                    <div className="flex justify-end mb-6"> 
                        <a href="#" className="text-sm text-gray-500 hover:underline"> 
                            Forgot Password? 
                        </a> 
                    </div> 
                    <button type="submit" className="w-full py-2 bg-custom-green text-white rounded-xl" > 
                        Sign in 
                    </button> 
                </form> 
                <p className="mt-4 text-text-gray text-sm"> 
                    I don't have an account?{" "} 
                    <a href="/register" className="text-custom-green hover:underline"> 
                        Sign up 
                    </a> 
                </p> 
            </div> 
        </div> 
    ); 
}  