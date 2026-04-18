import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/add-user", label: "Add User" },
    { path: "/user-list", label: "User List" },
  ];

  const getNavLinkClass = ({ isActive }) =>
    `transition-all duration-300 px-4 py-2 rounded-xl ${
      isActive 
        ? "text-orange-600 bg-white shadow-sm" 
        : "text-white hover:bg-blue-300"
    }`;

  return (
    <header className="bg-blue-500 shadow-md">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-3 gap-4">
        
        <div className="flex items-center gap-3">
          <img
            width="50px"
            height="50px"
            className="rounded-full border-2 border-white shadow-sm object-cover"
            src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg"
            alt="UserCentral Logo"
          />
          <span className="text-white font-black text-xl tracking-tight hidden md:block">
            UserCentral
          </span>
        </div>

        <ul className="flex items-center gap-2 sm:gap-4 font-semibold text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={getNavLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}

export default Header;