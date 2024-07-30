'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
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
          <div className="grid grid-cols-1 border p-4 rounded-lg w-auto shadow">
            <div className="image-container mb-4 relative w-full h-48">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="fixed-size-image" />
            </div>
            {/* <div className="w-48 h-48 bg-cover bg-center mb-4" style={{ backgroundImage: `url(${product.image})` }}></div> */}
            <p className="text-lg font-bold">{product.name}</p>
            <p className="text-green-500 text-xl">{product.price}</p>
            <p className="text-gray-500 line-through">{product.oldPrice}</p>
            <button className='border p-2 px-4 rounded-full mt-2'>Options</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
}