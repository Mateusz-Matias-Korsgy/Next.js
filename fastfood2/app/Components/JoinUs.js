import Image from "next/image";
export default function JoinUs() {
    return (
      <section className="text-center py-12 bg-white">
        <h2 className="text-3xl font-bold text-black">Be A Part Of Ujali</h2>
        <p className="mt-4 text-text-g">Fully nobis id expedita dolores officiis...</p>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <div className="border p-6 rounded-lg shadow-md w-fit">
            <div className="flex justify-center mb-4">
                <Image
                    src="/join.png"
                    alt="Join"
                    width={30}
                    height={30}
                    className='object-cover'
                />
            </div>
            <h3 className="text-xl font-semibold text-black">Become a Partner</h3>
            <p className="text-gray-500 mt-2">Learn lorem ipsum dolor sit amet consectetur...</p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded">See more</button>
          </div>
  
          <div className="border p-6 rounded-lg shadow-md w-fit">
            <div className="flex justify-center mb-4">
              <Image
                  src="/drive.png"
                  alt="Drive"
                  width={30}
                  height={30}
                  className='object-cover'
              />
            </div>
            <h3 className="text-xl font-semibold text-black">Become a Driver</h3>
            <p className="text-gray-500 mt-2">Learn lorem ipsum dolor sit amet consectetur...</p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded">Join us</button>
          </div>
        </div>
      </section>
    );
  }
  