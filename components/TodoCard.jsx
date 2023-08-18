import { Input } from "postcss";
import React from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const TodoCard = (props) => {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props;

    return (
        <div className=" relative flex sm:p-3 items-stretch p-2 border border-white">
            <div className="flex-1 flex">
                {!(edit === todoKey) ? (
                    <>{children}</>
                ) : (
                    <input value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} className="bg-inherit text-white outline-none" />
                )}
            </div>
            {/* <div className="flex-1 capitalize">{children}</div> */}
            <div className=" flex  items-center gap-4">
                {edit === todoKey ? (
                    <AiOutlineCheck onClick={handleEditTodo} className="hover:scale-125 cursor-pointer" />
                ) : (
                    <BsPencil onClick={handleAddEdit(todoKey)} className="duration-300 hover:rotate-45 cursor-pointer " />
                )}
                <BsTrash onClick={handleDelete(todoKey)} className="duration-300 hover:scale-125 cursor-pointer " />
            </div>
        </div>
    );
};

export default TodoCard;
