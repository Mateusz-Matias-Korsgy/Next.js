const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                    <div className="grid grid-cols-4 mt-4 space-x-4">
                        <div>
                            <a href="/about" className="hover:underline">About us</a>
                            <ul className="grid grid-cols-1 object-left">
                                <li>Store Finder</li>
                                <li>Colnago Second Hand</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/support" className="hover:underline">Support</a>
                            <ul className="grid grid-cols-1 object-left">
                                <li>Size guide</li>
                                <li>Bike Registration</li>
                                <li>Colnago Warranty</li>
                                <li>Contacts</li>
                                <li>Shipments and returns</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/follow" className="hover:underline">Follow us</a>
                            <ul className="grid grid-cols-1 object-left">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                        <div className="grid grid-row">
                            <p className="text-left text-lg px-4">Discover the latest news from the Colnago family with our weekly newsletter</p>
                            <input placeholder="Enter your email" className=" bg-gray-600 text-white rounded max-w-screen-sm"/>
                            <p className="text-left text-lg px-4">By signing up, I agree with the Terms and Conditions of Colnago</p>
                            <button type="submit" className="px-6 py-2 md:px-8 md:py-3 bg-white text-black font-semibold rounded w-fit">Submit</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 mt-8 space-x-4">
                        <p className="text-left px-4 text-sm">&copy; 2024 Colnago. All rights reserved.</p>
                        <a href="/terms" className="hover:underline">Terms & Conditions</a>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/cookie" className="hover:underline">Cookie Policy</a>
                        <a href="/international" className="hover:underline">International</a>
                    </div>
                </div>
        </footer>
    );
};
export default Footer;