import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray px-5 flex-1 dark:bg-blue-very-dark">
        <div className="relative -top-[88px] max-w-lg w-full m-auto md:-top-[110px]">
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
