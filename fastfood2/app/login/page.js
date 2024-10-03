'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { email, password };

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (res.ok && result.success) {
                localStorage.setItem('email', email);
                alert('Login successful! Redirecting to verification page...');
                router.push('/verification');
            } else {
                setError(result.message || 'Invalid login credentials');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="relative flex h-screen bg-gray-100">
            <img
                src="/logo.png"
                alt="Ujali Food"
                className="absolute top-6 left-6 h-10"
            />
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center bg-white px-16">
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                    <h2 className="text-5xl font-bold text-black mb-6">Login</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                        required
                    />
                    <span>
                        <a href="#" className="text-text-r text-sm block text-right">Forgot Password?</a>
                    </span>
                    <button
                        type="submit"
                        className="w-full bg-l-green text-white p-3 rounded-lg text-xl"
                    >
                        LOGIN
                    </button>
                    <p className="text-center text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="text-text-r">Sign up</a>
                    </p>

                    <div className="flex items-center justify-between mt-6">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">OR</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <button className="flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg w-full">
                            <img src="/facebook-icon.png" alt="Facebook" className="h-5 mr-2" />
                            <span className="text-gray-600">Sign in with Facebook</span>
                        </button>
                        <button className="flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg w-full">
                            <img src="/google-icon.png" alt="Google" className="h-5 mr-2" />
                            <span className="text-gray-600">Sign in with Google</span>
                        </button>
                    </div>
                </form>
            </div>
            <div
                className="hidden md:block md:w-2/5 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/food.png')`,
                    borderTopLeftRadius: '60px',
                    backgroundPosition: 'center 30%',
                    backgroundSize: 'cover'
                }}
            ></div>
        </div>
    );
}
