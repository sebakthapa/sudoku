import { BoardContext } from "@/contexts/boardContext";
import { boardContextType } from "@/types/boardContext.type";
import { useContext, useEffect, useState } from "react";

interface props {
  value: string;
  location: [number, number];
  backgroundColor: string;
}

const BoardInput = ({ value, location, backgroundColor }: props) => {
  const {
    boardData,
    setBoardData,
    selectedCellLocation,
    setSelectedCellLocation,
  } = useContext(BoardContext) as boardContextType;

  // const [backgroundColor, setBackgroundColor] =
  useState<string>("bg-transparent");

  const updateBoardData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;

    if (/^[0-9]+$/.test(value)) {
      setBoardData({ data: value, location });
      setSelectedCellLocation(location);
    }
  };

  const updateSelectedCellLocation = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const selectedValue: string = target.value || "";
    setSelectedCellLocation(location);
  };

  useEffect(() => {
    // console.log("selected cell value changed to", selectedCellLocation);
  }, [selectedCellLocation]);

  return (
    <div className="inline-block w-fit relative">
      <div
        className={`
      ${value && ""}
      note grid grid-cols-3 text-xs absolute w-full h-full top-0 left-0 p-1 opacity-50 pointer-events-none text-center`}
      >
        {!value && (
          <>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </>
        )}
      </div>
      <input
        type="number"
        value={value}
        className={`
      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
      outline-none cursor-pointer caret-transparent
      w-14  text-center  aspect-square text-2xl p- border-[1px] border-gray-700 text-gray-200 hover:bg-gray-700
      focus:bg-sky-800 
 ${backgroundColor}
      `}
        onFocus={updateSelectedCellLocation}
        onChange={updateBoardData}
      />
    </div>
  );
};

export default BoardInput;
