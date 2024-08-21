const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-left mx-auto px-4">Discover the latest news from the Colnago family with our weekly newsletter</p>
                <input placeholder="Enter your email" className=" bg-gray-600 text-white"/>
                <p className="text-left text-sm px-4">By signing up, I agree with the Terms and Conditions of Colnago</p>
                <button type="submit" className="px-6 py-2 md:px-8 md:py-3 bg-white text-black font-semibold rounded">Submit</button>
                <div className="mt-4 space-x-4">
                    <a href="/about" className="hover:underline">About us</a>
                    <a href="/support" className="hover:underline">Support</a>
                    <a href="/follow" className="hover:underline">Follow us</a>
                </div>
                <div className="mt-4 space-x-4">
                <a href="/international" className="hover:underline">International</a>
                </div>
                <div className="mt-4 space-x-4">
                    <a href="/terms" className="hover:underline">Terms & Conditions</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/cookie" className="hover:underline">Cookie Policy</a>
                </div>
                <p className="text-left px-4 text-sm">&copy; 2024 Colnago. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;