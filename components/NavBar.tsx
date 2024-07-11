"use client";

import Link from 'next/link';
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
    <nav className="bg-[rgb(15,50,55)] shadow-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              BASE LAB
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
            <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[rgb(15,50,55)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/research" onClick={() => handleNavigation('/research')}>Research</MobileNavLink>
            <MobileNavLink href="/publications" onClick={() => handleNavigation('/publications')}>Publications</MobileNavLink>
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
  <a href={href} onClick={(e) => { e.preventDefault(); onClick(); }} className="text-white hover:bg-[rgb(25,60,65)] block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </a>
);

export default NavBar;