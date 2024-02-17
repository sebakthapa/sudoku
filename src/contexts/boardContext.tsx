"use client";
import { updateBoardContextParams } from "@/types/boardContext.type";
import { ReactNode, createContext, useState } from "react";

const initialData = [
  ["1", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "1", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["1", "", "", "2", "", "", "", "", ""],
  ["", "3", "", "", "", "", "", "4", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "5", "", "", "", "", ""],
  ["", "", "", "", "", "", "5", "", ""],
  ["5", "", "", "", "", "", "", "", ""],
];
type InitialDataType = typeof initialData;

export const BoardContext = createContext<any>(initialData);

const BoardContextProvider = ({ children }: { children: ReactNode }) => {
  const [boardData, setBoardData]: any = useState<InitialDataType>(initialData);
  const [selectedCellLocation, setSelectedCellLocation] = useState<string>("");

  const updateBoardData = ({ data, location }: updateBoardContextParams) => {
    const [boxIndex, cellIndex] = location;
    setBoardData((prev: InitialDataType) => {
      const newData: InitialDataType = [...prev];
      newData[boxIndex][cellIndex] = data;

      return newData;
    });
  };

  return (
    <BoardContext.Provider
      value={{
        boardData,
        setBoardData: updateBoardData,
        selectedCellLocation,
        setSelectedCellLocation,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
