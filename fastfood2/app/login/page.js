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
        <div className="flex h-screen">
            <div className="w-3/5 flex flex-col justify-center items-center bg-white">
                <img src="logo.png" alt="Ujali Food" className="w-wrap h-16"/>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-4xl font-bold mb-6 text-black">Login</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 bg-bg-gray text-text-gray rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 bg-bg-gray text-text-gray rounded"
                        required
                    />
                    <a href="#" className="text-text-r">Forgot Password?</a>
                    <button
                        type="submit"
                        className="w-full bg-l-green text-white p-3 rounded"
                    >
                        Login
                    </button>
                    <p>
                        Don't have an account?{' '}
                        <a href="/register" className="text-text-r">Sign up</a>
                    </p>
                </form>
                <div className="flex items-center justify-between mt-6 w-full">
                    <hr className="w-full"/>
                    <span className="px-2">OR</span>
                    <hr className="w-full"/>
                </div>
                <div className="flex space-x-4 mt-4">
                    <button className="bg-white text-black py-2 px-4 rounded">
                        Sign in with Facebook
                    </button>
                    <button className="bg-white text-black py-2 px-4 rounded">
                        Sign in with Google
                    </button>
                </div>
            </div>
            <div
                className="w-2/5 h-auto mx-auto bg-cover bg-center"
                style={{backgroundImage: `url('/food.png')`}}
            ></div>
        </div>
    );
}
