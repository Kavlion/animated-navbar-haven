
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and about */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">ContentHub</h3>
            <p className="text-sm text-gray-600">
              Your ultimate destination for discovering amazing content, connecting with users, and finding inspiration.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-500" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-500" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-500" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/posts" className="text-gray-600 hover:text-blue-600">Posts</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
              </li>
              <li>
                <Link to="/users" className="text-gray-600 hover:text-blue-600">Users</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-600 hover:text-blue-600">Recipes</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">Community Forums</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <p className="text-sm text-gray-600 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              contact@contenthub.com
            </p>
            <form className="mt-2">
              <label className="block text-sm text-gray-600 mb-1">Subscribe to newsletter</label>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="px-3 py-2 border border-gray-300 rounded-l-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-2 rounded-r-md text-sm font-medium hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} ContentHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
