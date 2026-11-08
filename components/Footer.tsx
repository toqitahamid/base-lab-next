import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Logo & Description */}
          <div className="flex items-center gap-4">
            <Image 
              src="/images/logo/base-lab-logo-v5@4x.png"
              alt="BASE LAB Logo"
              width={160}
              height={32}
            />
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()}
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 text-sm">
              Projects
            </Link>
            <Link href="/equipment" className="text-gray-600 hover:text-gray-900 text-sm">
              Equipment
            </Link>
            <Link href="/publications" className="text-gray-600 hover:text-gray-900 text-sm">
              Publications
            </Link>
            <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm">
              Team
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900 text-sm">
              News
            </Link>
            <Link href="/join" className="text-gray-600 hover:text-gray-900 text-sm">
              Join
            </Link>
            <a
              href="https://www.linkedin.com/company/base-lab-siu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BASE Lab on LinkedIn"
              className="text-gray-600 hover:text-[#0A66C2]"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;