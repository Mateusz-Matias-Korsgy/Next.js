import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="py-4 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Ujali Food Logo" className="h-8"/>
                </div>
                <div className="flex space-x-6 text-black">
                    <Link legacyBehavior href="/">
                        <a className="hover:text-text-r">Home</a>
                    </Link>
                    <Link legacyBehavior href="/track-order">
                        <a className="hover:text-text-r">Track Order</a>
                    </Link>
                    <Link legacyBehavior href="/groceries">
                        <a className="hover:text-text-r">Groceries</a>
                    </Link>
                    <Link legacyBehavior href="/distribution">
                        <a className="hover:text-text-r">Distribution</a>
                    </Link>
                    <Link legacyBehavior href="/partners">
                        <a className="hover:text-text-r">Join Us</a>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Food, drinks, groceries, etc"
                            className="border border-bg-gray rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-text-r"
                        />
                        <span className="absolute right-4 top-2 text-text-gray">🔍</span>
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-text-gray hover:text-text-r">
                            ❤ 
                        </button>
                        <button className="relative text-text-gray hover:text-text-r">
                            🛒 
                            <span className="absolute top-0 right-0 bg-text-r text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}