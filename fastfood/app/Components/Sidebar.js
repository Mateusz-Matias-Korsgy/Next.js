export default function Layout({ children }) { 
    return ( 
        <div className="flex min-h-screen bg-gray-100"> 
            {/* Sidebar */} 
            <aside className="w-64 bg-white shadow-md"> 
                <div className="p-6"> 
                    <img src="/logo.png" alt="Ujali Food" className="h-20 w-40 object-contain" />
                    <nav className="space-y-4"> 
                        <a href="/dashboard" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">📊</span> Dashboard 
                        </a> 
                        <a href="/products" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">🛍️</span> Products 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">👥</span> Users 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">🚚</span> Drivers 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">🤝</span> Partners 
                        </a> 
                        <a href="/orders" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">📦</span> Orders 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">💵</span> Transactions 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">💬</span> Chat 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">🔔</span> Notifications 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">📧</span> E-mails 
                        </a> 
                        <a href="#" className="flex items-center text-gray-700 hover:bg-green-100 p-2 rounded"> 
                            <span className="mr-2">⚙️</span> Admin 
                        </a> 
                    </nav> 
                </div> 
            </aside> 
            {/* Main Content */} 
            <main className="flex-1 p-2"> 
                {children} 
            </main> 
        </div> 
    ); 
} 