import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex font-semibold [&>li]:transition-all [&>li]:duration-200 [&>li]:ease-in-out [&:hover>li]:mx-4 [&>li]:mx-2 [&>li]:capitalize [&>li:hover]:underline [&>li:hover]:decoration-teal-500">
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
