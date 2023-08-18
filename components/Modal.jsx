"use client";

import { useAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {
    const { setOpenModal } = props;
    const [_document, set_document] = useState(null);
    const { logout } = useAuth();

    useEffect(() => {
        set_document(document);
    }, []);

    if (!_document) {
        return null;
    }

    return ReactDOM.createPortal(
        <section className="sticky w-screen h-screen left-0 bg-white text-slate-900 flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-900 p-6">
                <h1 className="font-extrabold text-3xl sm:text-4xl select-none">Menu</h1>
                <AiOutlineClose onClick={() => setOpenModal(false)} className="duration-300  hover:rotate-180 text-xl sm:text-3xl font-bold cursor-pointer" />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <h2
                    onClick={() => {
                        logout();
                        setOpenModal(false);
                    }}
                    className="text-lg sm:text-xl duration-300 hover:pl-2 cursor-pointer"
                >
                    Logout
                </h2>
            </div>
        </section>,
        document.getElementById("portal")
    );
};

export default Modal;
