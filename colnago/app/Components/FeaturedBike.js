const bikes = [
    {name: 'Road bike', image: '/Road bike.png', description: 'For 70 years, Colnago has been building the bikes of legends. From the Monumental Classics to the Grand Tours, Colnago bikes continue to win.'},
    {name: 'Allroad bike', image: '/Allroad bike.png', description: 'Bikes that can be used on both tarmac and dirt roads. Don`t stop when the road ends.'},
    {name: 'Gravel bike', image: '/Gravel bike.png', description: 'From cyclocross to ultraracing, from mud to gravel. Bikes that master even the roughest terrain.'},
    {name: 'Time Trial bike', image: '/Time Trial bike.png', description: 'For triathlon and time trial races. More speed for less watts.'},
];

const FeaturedBikes = () => {
    return (
        <div className="py-16 bg-gray-800">
            <div className="flex flex-col justify-center mb-4 space-y-6 md:space-y-0 md:space-x-6">
                <img src="Manifesto.png" className="p-2 m-2 rounded-3xl"></img>
                <p className="text-white sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">We are the Ace of Cycling. We pursue nothing but excellence. We aim for the best in everything we do, The bold, triumphant spirit of our champions inspires us to create the most successful and trailblazing experiences.</p>
            </div>
            <div className="flex flex-col justify-center mb-4 space-y-6 md:space-y-0 md:space-x-6">
                <img src="Makers.png" className="item-center mb-2 p-2 rounded-3xl"></img>
                <h2 className="text-3xl font-bold text-center text-white mb-6">Makers of legends.</h2>
                <p className="text-l text-left text-white m-6">Every era has its champion. Every champion has a Colnago. Colnago's history is and continuesto be full of innovations, triumphs and glorious achievements. The great cycling epic has one constant: Colnago builds bikes for the most legendary heroes.</p> 
                <button className="w-28 object-center bg-gray-600 text-white font-semibold rounded ml-6">Our history</button>
            </div>
            <div>
                <img src="Win.png" className="item-center mb-2 p-2 rounded-3xl"></img>
                <p className="text-center text-white mb-6 sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">Legend, elegance, technology and timeless charm. Owning a Colnago is a pride that is passed down through the generations.</p>
            </div>
            <h2 className="text-3xl font-bold text-center text-white ">Featured Bikes</h2>
            <div className="flex flex-col md:flex-row justify-center p-4 space-y-6 md:space-y-0 md:space-x-6">
                {bikes.map((bike, index) => (
                    <div key={index} className="max-w-xs text-center mx-auto md:mx-0">
                        <img src={bike.image} alt={bike.name} className="h-fit w-full object-cover rounded-2xl mb-4"/>
                        <h3 className="text-white text-xl font-semibold">{bike.name}, {bike.description}</h3>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center p-4 space-y-6 md:space-y-0 md:space-x-6">
                <img src="Race.png" className="item-center mb-2 p-2 rounded-2xl"></img>
                <p className="text-xl text-left text-white">Tadej Pogacar's Colnago "Fleur-de-lys" No.001/111 auctioned at Sotheby's</p>
                <button type="button" className="bg-gray-900 text-white h-10 w-40 rounded-l justify-items-center">Read the article</button>
            </div>
        </div>
    );
};
export default FeaturedBikes;