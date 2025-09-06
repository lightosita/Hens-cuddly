import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Placeholder or Logo section on the left */}
        <div className="flex-1"></div>

        {/* Navigation Menu - Centered  header */}
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/shop">shop</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section - Aligned to the right */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <FaSearch className="text-gray-700 hover:text-blue-500 cursor-pointer text-2xl transition-colors" />
          <FaUserCircle className="text-gray-700 hover:text-blue-500 cursor-pointer text-2xl transition-colors" />
          <FaCartShopping className="text-gray-700 hover:text-blue-500 cursor-pointer text-2xl transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;
