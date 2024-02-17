import Board from "@/components/board/Board";
import Nav from "@/components/Nav";
import BoardContextProvider from "@/contexts/boardContext";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-20 mt-10">
        <BoardContextProvider>
          <Board />
        </BoardContextProvider>
      </main>

      <aside></aside>

      <footer></footer>
    </>
  );
}
