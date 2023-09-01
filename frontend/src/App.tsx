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
      <footer className="bg-gray">
        <div className="text-center text-xs text-gray-dark">
          Challenge by <a className="underline" href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Frontend Mentor</a>. 
          Coded by <a className="underline" href="https://github.com/cloviswrodrigues" target="_blank">Clóvis Rodrigues</a>.
        </div>    
    </footer>
    </>
  );
}

export default App;
