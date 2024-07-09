"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';



const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              BASE Lab
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/research">Research</NavLink>
            <NavLink href="/publications">Publications</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/news">News</NavLink>
            <NavLink href="/join">Join</NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/research">Research</MobileNavLink>
            <MobileNavLink href="/publications">Publications</MobileNavLink>
            <MobileNavLink href="/team">Team</MobileNavLink>
            <MobileNavLink href="/news">News</MobileNavLink>
            <MobileNavLink href="/join">Join</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </Link>
);

export default NavBar;