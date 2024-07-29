'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link'

const products = [
  {
    name: "Cate & Chloe Isabel 18k Rose Gold Plated Drop Dangle...",
    price: "$15.99",
    oldPrice: "$150.00",
    image: "/earrings.png",
  },
  {
    name: "Galanz 3.1 Cu Ft Two Door Mini Fridge with Freezer,...",
    price: "$139.00",
    oldPrice: "$174.00",
    image: "/fridge.png",
  },
  {
    name: "WiFi Cameras for Home Security, 1080P Battery...",
    price: "$29.99",
    oldPrice: "$99.99",
    image: "/camera.png",
  },
  {
    name: "TaoTronics Inflatable Swimming Pools, 118\" x 72\"...",
    price: "$49.98",
    oldPrice: "$99.99",
    image: "/pool.png",
  },
  {
    name: "Loritta Seamless Underwear For Women No Show Bikini...",
    price: "$13.99",
    oldPrice: "$39.99",
    image: "/underwear.png",
  },
  {
    name: "KUETH Area Rug 2'x3' Non-Slip Doormat Low Pile...",
    price: "$17.99",
    oldPrice: "$64.99",
    image: "/rug.png",
  }
];

export default function Home() {
  return (
    
    <div className="container mx-auto px-4">
        <header className='bg-blue-400'>
            <div className='flex flex-row sm:flex-row items-center w-full border-b-4'>
                <img src="/walmart.png" className="w-12 h-auto "/>
                <button className="w-36 h-auto ml-5 text-black border border-black rounded-full">Shipping</button>
                <div className='flex flex-row sm:flex-row items-center w-full ml-5 p-2 border rounded-full shadow-sm hover:shadow-md focus-within:shadow-md bg-white'>
                    <input type="text" className="flex-grow px-4 py-2 text-black bg-transparent outline-none" placeholder="Search for your items here" />
                    <img src="/glass.png" className="w-8 h-auto border rounded-full bg-blue-400 hover:bg-blue-500"/>
                </div>
                <button className="w-36 h-auto ml-5 text-black border border-black rounded-full">My Items</button>
                <button className="w-36 h-auto ml-5 text-black border border-black rounded-full">Account</button>
                <button className="w-36 h-auto ml-5 text-black border border-black rounded-full">Basket</button>
            </div>
            <div className='flex flex-row sm:flex-row items-center w-full border-t-4'>
                <nav className='container '>
                    <ul className='flex gap-6'>
                        <li>
                            <Link href='/' className='text-black'>Home</Link>
                        </li>
                        <li>
                            <Link href='slides' className='text-black'>Flash Deals</Link>
                        </li>
                        <li>
                            <Link href='walmart' className='text-black'>Walmart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </header>
      <h1 className="text-2xl font-bold mb-4">Flash Deals</h1>
      <p className="text-sm mb-8">Up to 65% off</p>
      <Swiper 
        spaceBetween={10}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="border p-4 rounded-lg w-60 shadow">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mb-4" />
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-green-500 text-xl">{product.price}</p>
              <p className="text-gray-500 line-through">{product.oldPrice}</p>
              <button className='border p-2 px-4 rounded-full'>Options</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <footer className='p-6 bg-blue-400 '>
      <div className='flex flex-row sm:flex-row w-full'>
            <nav className='container '>
                <ul className='flex gap-6'>
                    <li>
                        <Link href='/' className='text-black'>Home</Link>
                    </li>
                    <li>
                        <Link href='slides' className='text-black'>Flash Deals</Link>
                    </li>
                    <li>
                        <Link href='walmart' className='text-black'>Walmart</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='flex flex-row sm:flex-row w-full'>
            <p className='text-black font-sans'>Thank you for shopping at our store, Come back soon.</p>
        </div>
      </footer>
    </div>
  );
}