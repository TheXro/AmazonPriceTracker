import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIconst = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center  gap-1'>
          <Image
            src='/assets/icons/logo.svg'
            alt='logo'
            width={27}
            height={27}
          />

          <p className='nav-logo'>
            Save<span className='text-primary'>Da</span>Bucks
          </p>
</Link>
          <div className="flex items-center gap-5">
            {navIconst.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
              />
            ))} 
          </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
