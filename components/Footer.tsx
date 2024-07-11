import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(15,50,55)] text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gray-300 font-semibold text-lg mb-4">BASE Lab</h3>
            <p className="text-gray-300 text-sm">
              Advancing the frontiers of Computer Vision and Deep Learning at Southern Illinois University.
            </p>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/research" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link href="/publications" className="hover:text-primary transition-colors">Publications</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/join" className="hover:text-primary transition-colors">Join</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@siu.edu" className="text-gray-300 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BASE Lab, Southern Illinois University. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;