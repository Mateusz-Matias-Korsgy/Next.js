
export default function Header() {
    return (
        <header className="flex items-center justify-between p-2 shadow-sm bg-gray-100">
            <div className="relative w-full max-w-md">
                <input
                type="text"
                placeholder="Search here"
                className="w-full h-10 pl-4 pr-2 text-sm border rounded-full focus:outline-none focus:ring focus:ring-green-300 border-gray-300"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img
                    src="/glass.png"
                    alt="Search Icon"
                    className="w-4 h-4 text-gray-500"
                />
                </span>
            </div>
            <div className="flex space-x-1 ml-2">
                <div className="relative p-3 bg-green-100 rounded-full">
                    <img
                        src="/notification.png"
                        alt="Notification Icon"
                        className="w-5 h-5"
                    />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-green-500 rounded-full">
                        10
                    </span>
                </div>
                <div className="relative p-3 bg-green-100 rounded-full">
                    <img
                        src="/message.png"
                        alt="Message Icon"
                        className="w-5 h-5"
                    />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-green-500 rounded-full">
                        5
                    </span>
                </div>
            </div>
            <div>
                <svg width="1" height="56" viewBox="0 0 1 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1" height="56" rx="0.5" fill="#6B6B6D"/>
                </svg>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-black">Hello, Mark</span>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">M</div>
            </div>
        </header>
    );
}