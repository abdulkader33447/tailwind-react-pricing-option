import React from "react";
import Link from "./Link";

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
  return (
    <nav>
     <ul  className='flex gap-5'>
     {navigationData.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
     </ul>

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
    </nav>
  );
};

export default NavBar;
