import { ReactComponent as CloseSVG } from "../../assets/icon-cross.svg";

type TodoItemProps = {
    children: string,
}

const TodoItem = ({ children }: TodoItemProps) => {
    return (
        <li className="flex items-center p-4 pl-6 border-b border-gray-very-light">
            <button className="border block w-5 h-5 rounded-full border-gray-light mr-3"></button>
            <span className="flex-1 text-sm text-gray-very-dark">{children}</span>
            <div className="w-3"><CloseSVG /></div>
        </li>
    )
}

export default TodoItem