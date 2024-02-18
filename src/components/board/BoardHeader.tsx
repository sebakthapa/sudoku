import { difficultyLevels } from "@/configs/board.config";
import Button from "./Button";

const BoardHeader = () => {
  return (
    <div className="level-header flex items-center gap-5">
      <p className="opacity-80">Difficulty:</p>
      <div className="board__buttonContainer flex">
        {difficultyLevels.map((lvl, idx) => {
          return <Button key={idx}>{lvl.name}</Button>;
        })}
      </div>
    </div>
  );
};

export default BoardHeader;
