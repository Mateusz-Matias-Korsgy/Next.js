'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };
  const handleRegister = () => {
    router.push('/register');
  };

  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <h1 className="text-4xl font-bold text-black mb-6">Welcome to Ujali Food!</h1>
      <div className="space-x-4">
        <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}