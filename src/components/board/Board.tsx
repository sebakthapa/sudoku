"use client";
import BoardInput from "./BoardInput";
import BoardHeader from "./BoardHeader";
import Controller from "./BoardController";
import { BoardContext } from "@/contexts/boardContext";
import { useContext, useEffect, useState } from "react";
import { boardContextType } from "@/types/boardContext.type";
import { includesSubArray } from "@/utils/arrayMethods.utils";
import { getCellsRange } from "@/utils/board.utils";

const Board = () => {
  const { boardData, selectedCellLocation } = useContext(
    BoardContext,
  ) as boardContextType;

  const [rangeCells, setRangeCells] = useState<number[][]>([]);

  useEffect(() => {
    setRangeCells(getCellsRange(selectedCellLocation));
  }, [selectedCellLocation]);

  return (
    <div className="flex ">
      <div className="left">
        <BoardHeader />

        <div className="board grid grid-cols-3 grid-rows-3 w-fit border-collapse border-2 border-gray-700 rounded mt-5">
          {boardData?.map((box: any, boxNumber: number) => {
            return (
              <div
                key={`${boxNumber}`}
                className="box border-2 border-gray-700 grid grid-cols-3 w-fit border-collapse"
              >
                {box.map((cell: string, cellNumber: number) => {
                  let bg = "bg-[#101938]";
                  if (selectedCellLocation) {
                    const [s1, s2] = selectedCellLocation; //selectedCellLocation boxIndex, cellIndex
                    const selectedCellValue = boardData[s1][s2];

                    if (selectedCellValue && cell == selectedCellValue) {
                      bg = "bg-sky-800";
                    } else if (
                      includesSubArray(rangeCells, [boxNumber, cellNumber])
                    ) {
                      bg = "bg-black";
                    }
                  }

                  return (
                    <BoardInput
                      key={`${boxNumber}_${cellNumber}`}
                      value={cell}
                      location={[boxNumber, cellNumber]}
                      backgroundColor={bg}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <Controller />
    </div>
  );
};

export default Board;
