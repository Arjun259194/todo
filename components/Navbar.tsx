import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => setMenu(!menu);

  useEffect(() => {
    if (window.innerWidth > 640) setMenu(true);
    else setMenu(false);
  }, []);

  return (
    <nav className="relative flex">
      <button onClick={toggleMenu} className="sm:hidden">
        <Bars3Icon className="h-6 w-6 text-black" />
      </button>
      <ul
        className={`
          p-2 absolute right-0 top-full flex flex-col rounded-md text-xl divide-y-2 divide-gray-200
          [&>li]:mx-2 [&>li]:my-1 [&>li]:capitalize bg-gray-100 font-semibold shadow-lg border-2 border-gray-600/10
          sm:relative sm:flex-row sm:text-base sm:bg-transparent sm:divide-none
          sm:[&>li]:transition-all sm:[&>li]:duration-200 sm:[&>li]:ease-in-out sm:[&:hover>li]:mx-4
          sm:[&>li]:mx-2  sm:[&>li:hover]:underline [&>li:hover]:decoration-teal-500
          transition-transform duration-200 ease-in-out origin-top-right
          ${menu ? "scale-100" : "scale-0"}
       `}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
