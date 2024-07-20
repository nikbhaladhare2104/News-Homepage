"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <div className="header">
      <Image src="/logo.svg" alt="logo" width={65} height={40} />
      <div className="menu-icon" onClick={toggleMenu}>
        <Image
          src={`${!isOpen ? "/icon-menu.svg" : "/icon-menu-close.svg"}`}
          alt="menu"
          width={24}
          height={24}
        />
      </div>
       <nav className={isOpen ? "open" : ""}>
        <Link href="/" className="nav-link" onClick={toggleMenu}> Home </Link>
        <Link href="/" className="nav-link" onClick={toggleMenu}> New </Link>
        <Link href="/" className="nav-link" onClick={toggleMenu}> Popular </Link>
        <Link href="/" className="nav-link" onClick={toggleMenu}> Trending </Link>
        <Link href="/" className="nav-link" onClick={toggleMenu}> Categories </Link>
    </nav>
      
    </div>
  );
};

export default Header;
