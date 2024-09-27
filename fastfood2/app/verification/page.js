"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Verification() {
    const [code, setCode] = useState(['', '', '', '']);
    const [generateCode, setGenerateCode] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const generated = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        setGenerateCode(generated);
        alert(`Your verification code is: ${generated}`);

        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    const handleChange = (e, index) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredCode = code.join('');

        if (enteredCode === generateCode) {
            alert('Verification successful! Redirecting to the home page...');
            router.push('/home');
        } else {
            setError('Invalid verification code');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-3/5 flex flex-col justify-center items-center bg-white">
            <img src="logo.png" alt="Ujali Food" className="w-wrap h-16"/>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-4xl font-bold mb-6 text-black">Verification Code</h2>
                    <p className="mb-4 text-text-g">Enter the code that we have sent to your email {' '}<span className="font-bold">{email}</span></p>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex justify-between w-full">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                value={digit}
                                maxLength="1"
                                onChange={(e) => handleChange(e, index)}
                                className="w-3.5 h-6 text-3xl bg-bg-gray border hover:border-border hover:bg-hover rounded text-center"
                                required
                            />
                        ))}
                    </div>
                    <button type="submit" className="w-full bg-l-green text-white p-3 rounded">
                        Verify
                    </button>
                    <a href="#" className="text-text-r">Resend Code</a>
                </form>
            </div>
            <div
                className="w-2/5 h-auto mx-auto bg-cover bg-center"
                style={{backgroundImage: `url('/food.png')`}}
            ></div>
        </div>
    )
}