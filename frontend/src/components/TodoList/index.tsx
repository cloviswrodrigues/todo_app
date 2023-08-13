import { useState } from "react";

import TodoItem from "../TodoItem";

interface Todo {
  id: number,
  description: string,
  isCompleted: boolean
}

const todoTest: Todo[] = [{
  id: Math.random(),
  description: 'Jog around the park 3x',
  isCompleted: false,
},
{
  id: Math.random(),
  description: 'teste 1',
  isCompleted: false,
}
]

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[] | []>(todoTest);
  const [newTodo, setNewTodo] = useState<string>('');

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == 'Enter') {
      setTodoList((prevState) => [...prevState || [], { id: Math.random(), description: newTodo, isCompleted: false }])
      setNewTodo('');
    }
  }

  function handleCompleted(id: number) {      
    setTodoList((prevState) => {
      const indexTodoFound = prevState?.findIndex((todo) => todo.id === id) ?? -1;
      const newTodoList = [...prevState];
      if (indexTodoFound !== -1) {          
        const todoItem = { 
          ...newTodoList[indexTodoFound],
          isCompleted: newTodoList[indexTodoFound].isCompleted ? false: true
        }
        newTodoList[indexTodoFound] = todoItem;
      }
      return newTodoList
    })    
  }

  function handleDeleted(id: number) {
    setTodoList((prevState) => prevState.filter((todo)=> todo.id !== id))
  }

  function handleClearCompleted(){
      setTodoList([])
  }

  return (
    <>
      <div className="bg-white w-full px-3 pl-6 rounded-md text-sm mb-4 shadow-sm flex items-center dark:bg-blue-very-dark-desaturated">
        <span className="border block w-5 h-5 rounded-full border-gray-light mr-3 dark:border-gray-dark"></span>
        <input
          className="bg-transparent w-[90%] py-4 md:py-4 md:text-base"
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="bg-white rounded-md mb-4 shadow-lg dark:bg-blue-very-dark-desaturated">
        <ul>
          {todoList?.map((todo) => (
              <TodoItem 
                key={todo.id}
                id={todo.id} 
                handleCompleted={handleCompleted} 
                handleDeleted={handleDeleted}
                isCompleted={todo.isCompleted}>
                  {todo.description}
              </TodoItem>
            )
          )}
        </ul>
        <div className="flex justify-between items-center p-4 pl-6 text-xs text-gray-dark md:p-6 md:text-sm">
          <p>5 items left</p>
          <div className="font-bold hidden md:flex justify-center gap-4">
            <button className="hover:text-blue-very-dark">All</button>
            <button className="hover:text-blue-very-dark">Active</button>
            <button className="hover:text-blue-very-dark">Completed</button>
          </div>          
          <button onClick={handleClearCompleted} className="hover:text-blue-very-dark">Clear Completed</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md flex justify-center gap-4 shadow-sm text-gray-dark text-sm font-bold md:hidden dark:bg-blue-very-dark-desaturated">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p className="text-sm text-center text-gray-dark mt-10">Drag and drop to reorder list</p>
    </>
  );
};

export default TodoList;
