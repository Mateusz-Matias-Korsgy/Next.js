export default function Loyalty() {
    return (
      <div className="bg-white justify-center items-center w-full">
        <div className="bg-text-o mx-auto text-center text-white w-2/3 rounded">
          <h2 className="text-2xl font-bold">Join Our loyalty program and Get discount</h2>
          <div className="mt-6 max-w-md mx-auto">
            <input 
              type="email" 
              className="w-full p-3 rounded-l-lg text-gray-700" 
              placeholder="Enter your email" 
            />
            <button className="bg-white text-text-o px-6 py-3 rounded-r-lg">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
  