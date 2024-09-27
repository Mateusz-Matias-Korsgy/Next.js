import Image from 'next/image';
import Link from 'next/link';

export default function Grow() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white p-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg">
          <div className="bg-weak-orange rounded-full px-4 py-1 text-sm text-black mb-4 inline-block">
            Food is an Adventure
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Grow Your Business With <span className="text-orange-500">Ujali</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Quisque eleifend amet id nulla vitae 
            maecenas. Tristique scelerisque ultrices amet tellus.
          </p>
          <Link legacyBehavior href="/contact">
            <a className="mt-6 inline-block bg-l-green text-white font-semibold px-6 py-3 rounded-lg  transition">
              CONTACT US
            </a>
          </Link>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full border-4 border-green-500"></div>
            <Image 
              src="/handshake.png"
              alt="Handshake"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-8 border-l-green"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How can <span className="text-text-r">Ujali</span> help you?
          </h2>
          <div className="mt-8 relative max-w-4xl mx-auto">
            <div className="relative">
              <Image 
                src="/restaurant.png"
                alt="Restaurant"
                width={800}
                height={400}
                className="rounded-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full">
                  <svg 
                    className="w-12 h-12 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.414v6.828a1 1 0 001.707.707l4.828-4.828a1 1 0 000-1.414l-4.828-4.828A1 1 0 009 6.586z" 
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-l-green py-8">
        <div className="container mx-auto text-center">
          <Link legacyBehavior href="/partner">
            <a className="text-white text-lg font-semibold px-8 py-4 bg-l-green rounded-lg transition">
              Be a partner with Ujali
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
