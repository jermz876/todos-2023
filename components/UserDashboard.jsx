"use client";

import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { TodoCard } from "@/components";
import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import useFetchTodos from "@/hooks/fetchTodos";
import { FaSpinner } from "react-icons/fa";

const UserDashboard = () => {
    const { userInfo, currentUser } = useAuth();
    const [edit, setEdit] = useState(null);
    const [todo, setTodo] = useState("");
    const [edittedValue, setEdittedValue] = useState("");

    const { todos, setTodos, loading, error } = useFetchTodos();

    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true);
    //     }
    // }, [userInfo]);

    // Add new todo
    async function handleAddTodo() {
        if (!todo) {
            return;
        }
        const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
        setTodos({ ...todos, [newKey]: todo });
        const userRef = doc(db, "users", currentUser.uid);
        await setDoc(
            userRef,
            {
                todos: {
                    [newKey]: todo,
                },
            },
            { merge: true }
        );

        setTodo("");
    }

    async function handleEditTodo() {
        if (!edittedValue) {
            return;
        }
        const newKey = edit;
        setTodos({ ...todos, [newKey]: edittedValue });
        const userRef = doc(db, "users", currentUser.uid);
        await setDoc(
            userRef,
            {
                todos: {
                    [newKey]: edittedValue,
                },
            },
            { merge: true }
        );

        setEdit(null);
        setEdittedValue("");
    }

    function handleAddEdit(todoKey) {
        return () => {
            setEdit(todoKey);
            setEdittedValue(todos[todoKey]);
        };
    }

    function handleDelete(todoKey) {
        return async () => {
            const tempObj = { ...todos };
            delete tempObj[todoKey];
            setTodos(tempObj);
            const userRef = doc(db, "users", currentUser.uid);
            await setDoc(
                userRef,
                {
                    todos: {
                        [todoKey]: deleteField(),
                    },
                },
                { merge: true }
            );
        };
    }

    return (
        <section className="w-full max-w-[65ch] mx-auto flex flex-col flex-1 gap-3 sm:gap-5 text-xs sm:text-sm">
            <div className="flex items-stretch">
                <input
                    type="text"
                    placeholder="Enter todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1"
                />
                <button onClick={handleAddTodo} className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40">
                    ADD
                </button>
            </div>

            {loading && (
                <div className="flex-1 grid place-items-center">
                    <FaSpinner className="animate-spin text-3xl" />
                </div>
            )}
            {userInfo && !loading && (
                <>
                    {Object.keys(todos).map((todo, i) => {
                        return (
                            <TodoCard
                                key={i}
                                handleAddEdit={handleAddEdit}
                                edit={edit}
                                todoKey={todo}
                                edittedValue={edittedValue}
                                setEdittedValue={setEdittedValue}
                                handleEditTodo={handleEditTodo}
                                handleDelete={handleDelete}
                            >
                                {todos[todo]}
                            </TodoCard>
                        );
                    })}
                </>
            )}
            {/* {!addTodo && (
                <button
                    onClick={() => setAddTodo(true)}
                    className="border border-cyan-300 text-cyan-300 py-2 text-center uppercase font-medium text-lg duration-300 hover:opacity-70"
                >
                    {" "}
                    add todo
                </button>
            )} */}
        </section>
    );
};

export default UserDashboard;
