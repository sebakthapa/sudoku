"use client";
import BoardInput from "./BoardInput";
import BoardHeader from "./BoardHeader";
import Controller from "./Controller";
import { BoardContext } from "@/contexts/boardContext";
import { useContext, useEffect, useState } from "react";
import { boardContextType } from "@/types/boardContext.type";
import { includesSubArray } from "@/utils/arrayMethods.utils";

const Board = () => {
  const { boardData, selectedCellLocation } = useContext(
    BoardContext,
  ) as boardContextType;

  const [rangeCells, setRangeCells] = useState<number[][]>([]);

  useEffect(() => {
    // console.log(boardData);
    const [boxIndex, cellIndex] = selectedCellLocation;
    const rangeArray = [];

    // add all the cells of the box to which selected cell belongs
    for (let i = 0; i < 9; i++) {
      rangeArray.push([boxIndex, i]);
    }

    // add cells occuring in horizontal line
    {
      const startBoxIdx = boxIndex - (boxIndex % 3);
      const startCellIdx = cellIndex - (cellIndex % 3);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          rangeArray.push([startBoxIdx + i, startCellIdx + j]);
        }
      }
    }

    // add cells occuring in horizontal line
    {
      const startBoxIdx = boxIndex % 3;
      const startCellIdx = cellIndex % 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          rangeArray.push([startBoxIdx + 3 * i, startCellIdx + 3 * j]);
        }
      }
    }

    console.log(includesSubArray(rangeArray, [0, 1]));

    setRangeCells(rangeArray);
  }, [selectedCellLocation]);

  return (
    <div className="flex ">
      <div className="left">
        <BoardHeader />

        <div className="board grid grid-cols-3 grid-rows-3 w-fit border-collapse border-2 border-gray-700 ">
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
                    console.log(
                      includesSubArray(rangeCells, [boxNumber, cellNumber]),
                    );

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
