"use client";
import { updateBoardContextParams } from "@/types/boardContext.type";
import { isClient } from "@/utils/checkClient.utils";
import { ReactNode, createContext, useState } from "react";

let initialData: string[][] = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];
if (isClient) {
  const boardData = window.localStorage.getItem("boardData");
  if (boardData) {
    initialData = JSON.parse(boardData);
  }
}

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

      isClient &&
        window.localStorage.setItem("boardData", JSON.stringify(newData));

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
