"use client";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const LevelButton = ({ children }: props) => {
  return (
    <button className="border-2 border-transparent hover:border-gray-700 px-2 py-1 rounded transition">
      {children}
    </button>
  );
};

export default LevelButton;
