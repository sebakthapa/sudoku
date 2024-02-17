import React from "react";

const Nav = () => {
  return (
    <nav className="w-full py-4 px-10 ">
      <a
        href="/"
        title="Home"
        className="text-gray-300 hover:text-white transition duration-500"
      >
        <h1 className="logo text-3xl font-semibold ">Sudoku</h1>
      </a>
    </nav>
  );
};

export default Nav;
