"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";

const NavBar = () => (
  <nav className="w-full bg-primary text-primary-foreground p-4">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">
        CV & DL Lab
      </Link>
      <div className="flex space-x-2">
        <Button variant="ghost" asChild>
          <Link href="/research">Research</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/publications">Publications</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/team">Team</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/news">News</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  </nav>
);

export default NavBar;