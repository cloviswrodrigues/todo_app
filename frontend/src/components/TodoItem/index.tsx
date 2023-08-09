import { useState } from "react";

import { ReactComponent as CloseSVG } from "../../assets/icon-cross.svg";
import { ReactComponent as CheckSVG } from "../../assets/icon-check.svg";

type TodoItemProps = {
    children: string,
    isCompleted: boolean
}

const TodoItem = ({ children, isCompleted }: TodoItemProps) => {

    function handleCheck(e) {
        console.log(e)
    }    

    const classDescription = isCompleted ? 'line-through text-gray-light dark:text-gray-dark':'text-gray-very-dark dark:text-gray';

    return (
        <li className="flex items-center p-4 pl-6 border-b border-gray-very-light md:p-5 dark:border-gray-very-dark">
            <button onClick={handleCheck} className={`${!isCompleted && 'border'} block w-5 h-5 rounded-full mr-4 border-gray-light border-custom-gradient overflow-hidden dark:border-gray-dark`}>
                <div className={`p-[5px] h-full flex items-center justify-center bg-gradient-to-r from-blue to-pink ${isCompleted ? 'block': 'hidden'}`}>
                    <CheckSVG />
                </div>
            </button>
            <span className={`flex-1 text-sm cursor-pointer md:text-base ${classDescription}`}>{children}</span>
            <div className="w-3 cursor-pointer"><CloseSVG /></div>
        </li>
    )
}

export default TodoItem