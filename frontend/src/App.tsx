import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray px-5 flex-1">
        <div className="relative -top-[88px] max-w-lg w-full m-auto sm:-top-[110px]">
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
