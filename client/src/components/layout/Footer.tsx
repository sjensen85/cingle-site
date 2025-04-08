import { Link } from "wouter";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">Cingle</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses with AI and data solutions that drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services"><a className="text-gray-400 hover:text-white transition">AI Strategy & Implementation</a></Link></li>
              <li><Link href="/services"><a className="text-gray-400 hover:text-white transition">Data Analytics & Insights</a></Link></li>
              <li><Link href="/services"><a className="text-gray-400 hover:text-white transition">Machine Learning Solutions</a></Link></li>
              <li><Link href="/services"><a className="text-gray-400 hover:text-white transition">Custom AI Development</a></Link></li>
              <li><Link href="/services"><a className="text-gray-400 hover:text-white transition">Data Infrastructure</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about"><a className="text-gray-400 hover:text-white transition">About Us</a></Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><Link href="/case-studies"><a className="text-gray-400 hover:text-white transition">Case Studies</a></Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Cingle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
