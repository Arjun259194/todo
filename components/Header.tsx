import Navbar from "components/Navbar";

const Header = () => {
  return (
    <header className="w-full px-2 py-4 flex justify-between items-center ">
      <h1 className="flex items-center text-3xl font-semibold capitalize">
        <span className="text-4xl">📝</span>
        todo app
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
