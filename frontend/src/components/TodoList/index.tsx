const TodoList = () => {
  return (
    <>
      <div className="bg-white w-full px-3 pl-4 rounded-md text-sm mb-4 shadow-sm flex items-center">
        <span className="border-[1px] block w-6 h-5 rounded-full border-gray-light mr-3"></span>
        <input
          className="w-full text- py-4"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
      <ul className="bg-white rounded-md mb-4 shadow-lg">
        <li>Jog around the park 3x</li>
        <li>Jog around the park 3x</li>
        <li>Jog around the park 3x</li>
        <li>Jog around the park 3x</li>
        <li>Jog around the park 3x</li>
      </ul>
      <div className="bg-white p-4 rounded-md flex justify-center gap-4 shadow-sm">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  );
};

export default TodoList;
