import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">TelecomX</h2>
            <p className="text-gray-400 mt-2">
              Connecting you with the world through seamless communication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Plans</a></li>
              <li><a href="#" className="hover:text-blue-400">Support</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 mt-2">📍 Mumbai, India</p>
            <p className="text-gray-400">📞 +91 9420619032</p>
            <p className="text-gray-400">✉ nagargojeabhishek96@gmail.com</p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-6 pt-4">
          &copy; {new Date().getFullYear()} TelecomX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
