import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Orders() { 
    return ( 
            <div className="flex min-h-screen bg-gray-100"> 
                <Sidebar/>
                <div className="flex-1 ml-12">
                    <Header/>
                    <div>
                        <header className="flex items-center justify-between mb-4"> 
                            <h1 className="text-3xl font-bold text-black">Orders</h1>
                            <p className="text-xl text-black">Hi, Mark. Welcome back!</p> 
                            <div className="flex items-center space-x-4"> 
                                <input type="text" placeholder="Search here" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" /> 
                                <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"> 
                                    Filter 
                                </button> 
                                <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"> 
                                    Today 
                                </button> 
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"> 
                                    Add 
                                </button> 
                            </div> 
                        </header> 
                        <table className="w-11/12 bg-white rounded-lg shadow overflow-hidden"> 
                            <thead className="bg-gray-50"> 
                                <tr> 
                                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Order ID</th> 
                                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Order Date</th> 
                                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Order Status</th> 
                                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Actions</th> 
                                </tr> 
                            </thead> 
                            <tbody> {[ 
                                { id: '#1000', date: 'Just now', status: 'In Progress', statusColor: 'text-yellow-500' }, 
                                { id: '#1000', date: 'A minute ago', status: 'Complete', statusColor: 'text-green-500' }, 
                                { id: '#1000', date: '1 hour ago', status: 'Pending', statusColor: 'text-red-500' }, 
                                { id: '#1000', date: 'Yesterday', status: 'Approved', statusColor: 'text-orange-500' }, 
                                { id: '#1000', date: 'Yesterday', status: 'Rejected', statusColor: 'text-gray-500' }, 
                                ].map((order, index) => ( 
                                <tr key={index} className="border-t"> 
                                    <td className="px-6 text-black py-4">{order.id}</td> 
                                    <td className="px-6 text-black py-4">{order.date}</td> 
                                    <td className={`px-6 text-black py-4 ${order.statusColor}`}>{order.status}</td> 
                                    <td className="px-6 py-4"> 
                                        <button className="text-gray-600 hover:text-gray-900 mx-1">✏️</button> 
                                        <button className="text-gray-600 hover:text-gray-900 mx-1">🗑️</button> 
                                    </td> 
                                </tr> 
                            ))} 
                            </tbody> 
                        </table> 
                        <div className="flex justify-between mt-4 text-sm text-gray-500"> 
                            <span>Showing 1 to 5 of 25 entries</span> 
                            <div className="flex space-x-2"> 
                                <button className="px-2 py-1 bg-white border rounded">1</button> 
                                <button className="px-2 py-1 bg-white border rounded">2</button> 
                                <button className="px-2 py-1 bg-white border rounded">3</button> 
                                <button className="px-2 py-1 bg-white border rounded">4</button> 
                                <button className="px-2 py-1 bg-white border rounded">5</button> 
                            </div> 
                        </div> 
                    </div>
                </div>  
            </div> 
    ); 
}  