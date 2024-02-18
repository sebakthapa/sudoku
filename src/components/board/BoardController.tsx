import React from "react";
import { ImUndo } from "react-icons/im";
import ControllerButton from "./ControllerButton";
import { PiEraserBold } from "react-icons/pi";
import { TiPencil } from "react-icons/ti";
import { TbBulb } from "react-icons/tb";
import { BsFillPlayFill } from "react-icons/bs";
import ControllerKey from "./ControllerKey";

const BoardController = () => {
  const buttons = [
    {
      label: "Undo",
      icon: <ImUndo />,
      clickAction: () => false,
    },
    {
      label: "Erase",
      icon: <PiEraserBold />,
      clickAction: () => false,
    },
    {
      label: "Note",
      icon: <TiPencil />,
      clickAction: () => false,
    },
    {
      label: "Hint",
      icon: <TbBulb />,
      clickAction: () => false,
    },
  ];
  return (
    <div>
      <div className="controller-header w-full">
        <div className="top text-sm flex gap-2 py-2 mb-6 min-w-full justify-between">
          <span>Mistakes: 1.3</span>
          <span>Score: 301.2</span>
          <div className="flex items-center gap-2">
            <span>00:24</span>
            <button className="rounded-full bg-blue-900 p-1 cursor-pointer transition hover:bg-blue-800 active:scale-95">
              {" "}
              <BsFillPlayFill />{" "}
            </button>
          </div>
        </div>

        <div className="buttons flex gap-4 justify-between">
          {buttons.map(({ icon, clickAction, label }, idx) => {
            return (
              <ControllerButton
                key={idx}
                icon={icon}
                clickAction={clickAction}
                label={label}
              />
            );
          })}
        </div>
      </div>

      <div className="controllerKeys grid grid-cols-3 gap-2 mt-6">
        {Array.from("123456789").map((num) => {
          return <ControllerKey key={num} label={num} />;
        })}
      </div>
      <button className="w-full py-6 px-5 bg-blue-950 border-2 border-gray-700 rounded-lg mt-5 transition duration-500 hover:bg-blue-900 hover:border-gray-300 font-semibold text-xl text-gray-300 hover:text-white">
        New Game
      </button>
    </div>
  );
};

export default BoardController;
