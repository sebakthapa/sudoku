import { difficultyLevels } from "@/configs/board.config";
import LevelButton from "./LevelButton";

const BoardHeader = () => {
  return (
    <div className="level-header flex items-center gap-5">
      <p className="opacity-80">Difficulty:</p>
      <div className="board__buttonContainer flex">
        {difficultyLevels.map((lvl, idx) => {
          return <LevelButton key={idx}>{lvl.name}</LevelButton>;
        })}
      </div>
    </div>
  );
};

export default BoardHeader;
