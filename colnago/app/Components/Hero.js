const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-[500px] md:h-[600px] lg:h-[700px]" style={{backgroundImage: "url('/hero-image.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Colnago C68</h1>
                    <p className="text-lg md:text-xl mb-8">The Ultimate Expression of Engineering Excellence</p>
                    <button className="px-6 py-2 md:px-8 md:py-3 bg-yellow-500 text-black font-semibold rounded">Discover More</button>
                </div>
            </div>
        </div>
    );
};
export default Hero;