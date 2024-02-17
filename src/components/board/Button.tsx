"use client";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Button = ({ children }: props) => {
  return (
    <button className="border-2 border-transparent hover:border-gray-700 px-2 py-1/2 rounded transition">
      {children}
    </button>
  );
};

export default Button;
