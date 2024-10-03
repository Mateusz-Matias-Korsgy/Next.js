"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        const data = {
            username,
            email,
            password,
        };

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            const result = await res.json();
            if (result.success) {
                alert('Registration successful! Redirecting to login...');
                router.push('/login');
            } else {
                setError(result.message);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    };

    return(
        <div className="relative flex h-screen bg-gray-100">
            <img
                src="/logo.png"
                alt="Ujali Food"
                className="absolute top-6 left-6 h-10"
            />
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center bg-white px-16">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-4xl font-bold text-black mb-6">Sign Up</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 bg-bg-gray text-text-gray rounded"
                        required
                    />
                    <input 
                        type="email"
                        placeholder="Email"
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
                    <input 
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 bg-bg-gray text-text-gray rounded"
                        required
                    />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" required/>
                        <span className="text-black">
                            By signing up you accept the{' '}
                            <a href="#" className="text-text-r">Terms of service</a>{' '}
                            and{' '}
                            <a href="#" className="text-text-r">Privacy Policy</a>
                        </span>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-l-green text-white p-3 rounded">
                        Sign up
                    </button>
                    <p className="text-black">
                        Already have an account?{' '}
                        <a href="/login" className="text-text-r">
                            Sign in
                        </a>
                    </p>
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
