"use client";
import { BoardContext } from "@/contexts/boardContext";
import { boardContextType } from "@/types/boardContext.type";
import React, { useContext } from "react";

interface props {
  label: number | string;
}

const ControllerKey = ({ label }: props) => {
  const { selectedCellLocation, setBoardData } = useContext(
    BoardContext,
  ) as boardContextType;

  const fillNumber = () => {
    setBoardData({ data: label, location: selectedCellLocation });
  };
  return (
    <button
      className="p-6 rounded-lg text-center  text-gray-300 bg-blue-950 aspect-square text-3xl font-medium border-2 border-blue-950 hover:border-gray-600 transition active:scale-95 hover:bg-[#23346E] hover:text-gray-100"
      onClick={fillNumber}
    >
      {label}
    </button>
  );
};

export default ControllerKey;
