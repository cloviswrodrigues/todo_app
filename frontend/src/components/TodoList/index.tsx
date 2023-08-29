import { useState } from "react";
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import TodoItem from "../TodoItem";

interface Todo {
  id: number,
  description: string,
  isCompleted: boolean
}

enum FilterBy {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed'
}

const todoTest: Todo[] = [{
  id: 34,
  description: 'Jog around the park 3x',
  isCompleted: false,
},
{
  id: 34534,
  description: 'teste 1',
  isCompleted: false,
}
]

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[] | []>(todoTest);
  const [newTodo, setNewTodo] = useState<string>('');
  const [filter, setFilter] = useState<FilterBy>(FilterBy.All);

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == 'Enter' && newTodo.length >= 5) {
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
      setTodoList((prevState) => prevState.filter((todo) => todo.isCompleted !== true))
  }

  const onDragEnd = () => {}

  const TodoListFiltered = todoList.filter((todo) => {
    if (filter === FilterBy.Active) {
      return todo.isCompleted === false
    } else if(filter === FilterBy.Completed) {
      return todo.isCompleted === true
    } else {
      return true
    }
  })

  const todoActiveLeft = todoList.filter((todo) => todo.isCompleted === false).length;

  const isFilterAllSelected = filter === FilterBy.All ? 'text-blue-very-dark dark:text-blue-bright': '';
  const isFilterActiveSelected = filter === FilterBy.Active ? 'text-blue-very-dark dark:text-blue-bright': '';
  const isFilterCompletedSelected = filter === FilterBy.Completed ? 'text-blue-very-dark dark:text-blue-bright': '';

  return (
    <>
      <div className="bg-white w-full px-3 pl-6 rounded-md text-sm mb-4 shadow-sm flex items-center dark:bg-blue-very-dark-desaturated">
        <span className="border block w-5 h-5 rounded-full border-gray-light mr-3 dark:border-gray-dark"></span>
        <input
          className="bg-transparent w-[90%] py-4 md:py-4 md:text-base dark:text-gray"
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      {todoList.length > 0 && 
        <>
        <div className="bg-white rounded-md mb-4 shadow-lg dark:bg-blue-very-dark-desaturated">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {TodoListFiltered.map((todo, index) => (                      
                      <TodoItem 
                        key={todo.id}
                        idItem={todo.id}
                        index={index}
                        handleCompleted={handleCompleted} 
                        handleDeleted={handleDeleted}
                        isCompleted={todo.isCompleted}
                      >
                        {todo.description}
                      </TodoItem>
                  ))}
                  {provided.placeholder}
                </div>
              )}   
              
            </Droppable>
          </DragDropContext>
          <div className="flex justify-between items-center p-4 pl-6 text-xs text-gray-dark md:p-6 md:text-sm">
            <p className="min-w-[80px]">{todoActiveLeft} items left</p>
            <div className="font-bold hidden md:flex justify-center gap-4">
              <button 
                className={`${isFilterAllSelected} hover:text-blue-very-dark dark:hover:text-gray`}
                onClick={() => setFilter(FilterBy.All)}
                >All
              </button>
              <button 
                className={`${isFilterActiveSelected} hover:text-blue-very-dark dark:hover:text-gray`}
                onClick={() => setFilter(FilterBy.Active)}
                >Active
              </button>
              <button 
                className={`${isFilterCompletedSelected} hover:text-blue-very-dark dark:hover:text-gray`}
                onClick={() => setFilter(FilterBy.Completed)}
                >Completed
              </button>
            </div>          
            <button onClick={handleClearCompleted} className="hover:text-blue-very-dark">Clear Completed</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md flex justify-center gap-4 shadow-sm text-gray-dark text-sm font-bold md:hidden dark:bg-blue-very-dark-desaturated">
          <button className={`${isFilterAllSelected} dark:hover:text-gray`} onClick={() => setFilter(FilterBy.All)}>All</button>
          <button className={`${isFilterActiveSelected} dark:hover:text-gray`} onClick={() => setFilter(FilterBy.Active)}>Active</button>
          <button className={`${isFilterCompletedSelected} dark:hover:text-gray`} onClick={() => setFilter(FilterBy.Completed)}>Completed</button>
        </div>
        <p className="text-sm text-center text-gray-dark mt-10">Drag and drop to reorder list</p>
        </>
      }
    </>
  );
};

export default TodoList;
