
export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 shadow-sm bg-gray-100">
            <input 
            type="text" 
            placeholder="Search here"
            className="border p-2 rounded w-1/3"/>
            <div className="flex items-center space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Filter Period</button>
                <span>Hello, Mark</span>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">M</div>
            </div>
        </header>
    );
}