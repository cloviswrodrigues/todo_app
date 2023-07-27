import TodoItem from "../TodoItem";

const TodoList = () => {
  return (
    <>
      <div className="bg-white w-full px-3 pl-6 rounded-md text-sm mb-4 shadow-sm flex items-center">
        <span className="border block w-5 h-5 rounded-full border-gray-light mr-3"></span>
        <input
          className="py-4"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
      <div className="bg-white rounded-md mb-4 shadow-lg">
        <ul>
          <TodoItem>Jog around the park 3x</TodoItem>
          <TodoItem>Jog around the park 3x</TodoItem>
          <TodoItem>Jog around the park 3x</TodoItem>
          <TodoItem>Jog around the park 3x</TodoItem>
          <TodoItem>Jog around the park 3x</TodoItem>
        </ul>
        <div className="flex justify-between items-center p-4 pl-6 text-xs text-gray-dark">
          <p>5 items left</p>
          <button>Clear Completed</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md flex justify-center gap-4 shadow-sm mb-10 text-gray-dark text-sm font-bold">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p className="text-sm text-center text-gray-dark">Drag and drop to reorder list</p>
    </>
  );
};

export default TodoList;
