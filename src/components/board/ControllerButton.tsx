import { ReactNode, createElement } from "react";

interface props {
  icon: ReactNode;
  clickAction: () => {};
  label: string;
}
const ControllerButton = ({ icon, clickAction, label }: props) => {
  return (
    <div className="text-center">
      <button
        onClick={clickAction}
        className={`
      rounded-full text-gray-300 aspect-square p-[1.1rem] bg-blue-950 transition border-2 border-blue-950 text-2xl
      hover:border-[rgba(255,255,255,.2)] hover:text-gray-50 active:scale-95
      `}
      >
        {icon}
      </button>
      <p className=" mt-1 text-sm text-gray-400">{label}</p>
    </div>
  );
};

export default ControllerButton;
