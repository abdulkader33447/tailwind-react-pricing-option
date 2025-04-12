import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    name: "Home",
    path: "/home",
    id: 1,
  },
  {
    name: "About Us",
    path: "/about-Us",
    id: 2,
  },
  {
    name: "Service",
    path: "/service",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 5,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between">
      <span className="flex gap-5" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul className="md:hidden">{links}</ul>

        <h3>My Navbar</h3>
      </span>

      <ul className="md:flex md:gap-5 hidden">{links}</ul>

      {/* <ul className='flex gap-5'>
        {navigationData.map((route) => (
          <li className="mr-10">
            <a href="/">{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className='flex gap-5'>
        <li className='mr-10'><a href="/">Home</a></li>
        <li className='mr-10'><a href="/about">About</a></li>
        <li className='mr-10'><a href="/blog"></a>Blog</li>
      </ul> */}
      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;
