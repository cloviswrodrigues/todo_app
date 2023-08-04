import { ReactComponent as CloseSVG } from "../../assets/icon-cross.svg";

type TodoItemProps = {
    children: string,
}

const TodoItem = ({ children }: TodoItemProps) => {
    return (
        <li className="flex items-center p-4 pl-6 border-b border-gray-very-light md:p-5 dark:border-gray-very-dark">
            <button className="border block w-5 h-5 rounded-full mr-4 border-gray-light border-custom-gradient dark:border-gray-dark"></button>
            <span className="flex-1 text-sm text-gray-very-dark cursor-pointer md:text-base dark:text-gray">{children}</span>
            <div className="w-3 cursor-pointer"><CloseSVG /></div>
        </li>
    )
}

export default TodoItem