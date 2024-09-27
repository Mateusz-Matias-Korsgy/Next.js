// components/Reviews.js
export default function Reviews() {
    return (
      <section className="bg-gray-50 py-12">
        <h2 className="text-center text-3xl font-bold text-black">Reviews from our customers</h2>
        <p className="text-center text-gray-500 mt-4">Fully nobis id expedita dolores officiis layered dolor sit amet layered dolot sit amet</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 justify-items-center">

            <div className="p-3 border rounded-lg shadow-md bg-white w-11/12">
                <p className="text-gray-600">I was blown away by the ease of use of this food order and delivery website. The variety of options available is amazing, and the food arrived fresh and hot within minutes of ordering.</p>
                <div className="flex items-center mt-4">
                    <div 
                        className="h-12 w-12 rounded-full bg-cover bg-center"
                        style={{backgroundImage: `url('/peter.png')`, backgroundSize: '175%', backgroundPosition: 'center 45%',}}
                        >
                    </div>
                    <div className="ml-4">
                        <h4 className="font-semibold text-black">Peterson Wilson</h4>
                        <p className="text-sm text-gray-500">Ceo Hive haven</p>
                        <p className="mt-2 text-yellow-500">★★★★★</p>
                    </div>
                </div>
            </div>
  
            <div className="p-3 border rounded-lg shadow-md bg-white w-11/12">
                <p className="text-gray-600">This food order and delivery website is a lifesaver for me. As a busy professional, I don't have time to cook, and this website makes it easy for me to order a healthy and tasty meal with just a few clicks.</p>
                <div className="flex items-center mt-4">
                    <div 
                        className="h-12 w-12 rounded-full bg-cover bg-center"
                        style={{backgroundImage: `url('/john.png')`, backgroundSize: '175%', backgroundPosition: 'center 45%',}}
                        >
                    </div>
                    <div className="ml-4">
                        <h4 className="font-semibold text-black">John Mark</h4>
                        <p className="text-sm text-gray-500">Business professional</p>
                        <p className="mt-2 text-yellow-500">★★★★★</p>
                    </div>
                </div>
            </div>

            <div className="p-3 border rounded-lg shadow-md bg-white w-11/12">
                <p className="text-gray-600">I've been using this food order and delivery website for a while now and I'm never disappointed. The variety of cuisines and dishes available is impressive, and the prices are very reasonable.</p>
                <div className="flex items-center mt-4">
                    <div 
                        className="h-12 w-12 rounded-full bg-cover bg-center"
                        style={{backgroundImage: `url('/jenny.png')`, backgroundSize: '175%', backgroundPosition: 'center 45%',}}
                        >
                    </div>
                    <div className="ml-4">
                        <h4 className="font-semibold text-black">Jenny Fold</h4>
                        <p className="text-sm text-gray-500">Sales Manager</p>
                        <p className="mt-2 text-yellow-500">★★★★★</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
  