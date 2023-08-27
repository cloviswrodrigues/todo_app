import { Draggable } from '@hello-pangea/dnd';


import { ReactComponent as CloseSVG } from "../../assets/icon-cross.svg";
import { ReactComponent as CheckSVG } from "../../assets/icon-check.svg";

type TodoItemProps = React.ComponentProps<'div'> & {
    idItem: number,
    index: number,
    isCompleted: boolean
    addStyle?: string,
    handleCompleted: (id: number) => void
    handleDeleted: (id: number) => void
}

const TodoItem = ({ idItem, index, children, isCompleted, addStyle, handleCompleted, handleDeleted, ...props }: TodoItemProps) => {
    const idTodoItem = idItem;

    function handleCheck() {
        handleCompleted(idTodoItem);
    }    

    function handleRemove() {
        handleDeleted(idTodoItem)
    }

    const classDescription = isCompleted ? 'line-through text-gray-light dark:text-gray-dark':'text-gray-very-dark dark:text-gray';

    return (
        <Draggable draggableId={idItem.toString()} index={index}> 
            {(provided) => (
                <div                  
                    className={`flex items-center p-4 pl-6 border-b border-gray-very-light cursor-move md:p-5 dark:border-gray-very-dark [&>div]:hover:opacity-100 ${addStyle}`}        
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <button onClick={handleCheck} className={`${!isCompleted && 'border'} block w-5 h-5 rounded-full mr-4 border-gray-light border-custom-gradient overflow-hidden dark:border-gray-dark`}>
                    <div className={`p-[5px] h-full flex items-center justify-center bg-gradient-to-r from-blue to-pink ${isCompleted ? 'block': 'hidden'}`}>
                        <CheckSVG />
                    </div>
                    </button>
                    <span className={`flex-1 text-sm break-words max-w-[90%] md:text-base ${classDescription}`}>{children}</span>
                    <div onClick={handleRemove} className="w-3 cursor-pointer transition-all duration-300 md:opacity-0"><CloseSVG /></div>
                </div>
            )}           
        </Draggable>
    )
}

export default TodoItem