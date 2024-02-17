import Button from "./Button";

const BoardHeader = () => {
  return (
    <div className="level-header flex items-center gap-5">
      <p className="opacity-80">Difficulty:</p>
      <div className="board__buttonContainer flex">
        <Button>Easy</Button>
        <Button>Medium</Button>
        <Button>Hard</Button>
        <Button>Expert</Button>
        <Button>Master</Button>
      </div>
    </div>
  );
};

export default BoardHeader;
