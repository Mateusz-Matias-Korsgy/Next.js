import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-green-50 py-12">
           <div className="container mx-auto flex flex-col justify-center items-center text-center">
                <div className="mb-8">
                    <span className="inline-block bg-weak-orange text-black px-4 py-2 rounded-full text-sm mb-4">
                        Food is an Adventure
                    </span>
                    <h1 className="text-5xl font-bold text-black mb-4">
                        We speak food language with <span className="text-text-r">Our Menu</span>
                    </h1>
                    <p className="text-text-g mt-4 text-lg">
                        Food is an Adventure, Satisfy Your Cravings with Our Delicious Food, Delivered to Your Doorstep!
                    </p>
                </div>
                <div className="relative mb-20">
                    <div className="w-[300] h-[300] border-8 border-green-300 rounded-full overflow-hidden">
                        <Image 
                            src="/pizza.png"
                            alt="Pizza"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute top-72 left-24 bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src="/crispy-crust.png"
                            alt="Crispy Crust"
                            className="object-cover w-16 h-16 rounded"
                        />
                        <h4 className="font-semibold text-black">Crispy Crust</h4>
                        <p className="text-sm text-black">$7.90</p>
                        <div className="flex text-yellow-500">
                            ⭐⭐⭐
                        </div>
                    </div>
                    <div className="absolute bottom-40 right-72 bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src="/king-pizza.png"
                            alt="King Pizza"
                            className="object-cover w-16 h-16 rounded"
                        />
                        <h4 className="font-semibold text-black">King Pizza</h4>
                        <p className="text-sm text-black">$7.90</p>
                        <div className="flex text-yellow-500">
                            ⭐⭐⭐
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-md flex">
                    <input
                        type="texxt"
                        placeholder="Enter delivery address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                    />
                    <button className="bg-l-green text-white px-6 py-2 rounded-r-lg font-poppins">
                        Search
                    </button>
                </div>
            </div> 
        </section>   
    );
}