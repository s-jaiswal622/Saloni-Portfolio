import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md">
      <Link to="/" className="text-xl font-bold text-white">SaloniJaiswal.Dev</Link>
      <div className="space-x-6 text-gray-300">
        <Link to="/projects" className="hover:text-white">Projects</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
        <Link to="/resume" className="hover:text-white"> View Resume </Link>
      </div>
    </nav>
  );
};

export default Navbar;
