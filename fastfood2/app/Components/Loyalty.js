export default function Loyalty() {
    return (
      <section className="bg-orange-500 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Join Our loyalty program and Get discount</h2>
  
        <div className="mt-6 max-w-md mx-auto">
          <input 
            type="email" 
            className="w-full p-3 rounded-l-lg text-gray-700" 
            placeholder="Enter your email" 
          />
          <button className="bg-white text-orange-500 px-6 py-3 rounded-r-lg">Get Started</button>
        </div>
      </section>
    );
  }
  