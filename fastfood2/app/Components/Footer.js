export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold">Ujali Food</h4>
              <p className="mt-2 text-gray-400">There are many variations of passages of Lorem the Ipsum available but it is the majority of suffered that a alteration in that some dummy.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Quick Link</h4>
              <ul className="mt-4 text-gray-400 space-y-2">
                <li>Home</li>
                <li>Categories</li>
                <li>Join Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Support</h4>
              <ul className="mt-4 text-gray-400 space-y-2">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Follow Us</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
                <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
              </div>
              <div className="mt-4">
                <a href="#"><img src="/icons/appstore.svg" alt="App Store" /></a>
                <a href="#"><img src="/icons/playstore.svg" alt="Google Play" /></a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">&copy; 2023 Ujali Food. All Rights Reserved</p>
        </div>
      </footer>
    );
  }
  