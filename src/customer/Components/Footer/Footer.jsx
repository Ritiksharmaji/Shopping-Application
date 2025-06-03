
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-4">
            <h2 className="text-lg font-semibold mb-2">ShopEasy</h2>
            <p className="text-sm">
              Your one-stop shop for all your needs. Quality products, great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} ShopEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

