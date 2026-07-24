"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[rgb(15,50,55)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/base-lab-v4@3x.png"
                alt="BASE LAB at SIU Carbondale - Computer Vision and Deep Learning Research Laboratory Logo"
                width={180}
                height={80}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/publications">Publications</NavLink>
            <NavLink href="/equipment">Equipment</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/news">News</NavLink>
            <NavLink href="/join">Join</NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[rgb(15,50,55)]" role="navigation" aria-label="Mobile navigation menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/projects" onClick={() => handleNavigation('/projects')}>Projects</MobileNavLink>
            <MobileNavLink href="/publications" onClick={() => handleNavigation('/publications')}>Publications</MobileNavLink>
            <MobileNavLink href="/equipment" onClick={() => handleNavigation('/equipment')}>Equipment</MobileNavLink>
            <MobileNavLink href="/team" onClick={() => handleNavigation('/team')}>Team</MobileNavLink>
            <MobileNavLink href="/news" onClick={() => handleNavigation('/news')}>News</MobileNavLink>
            <MobileNavLink href="/join" onClick={() => handleNavigation('/join')}>Join</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link href={href} onClick={onClick} className="text-white hover:bg-[rgb(25,60,65)] block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </Link>
);

export default NavBar;