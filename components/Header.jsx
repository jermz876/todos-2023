"use client";

import React, { useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { Modal } from "@/components";

const Header = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className="sticky w-full top-0 left-0 flex items-center justify-between p-6 bg-inherit border-b-2 border-b-white">
                <h1 className="text-3xl sm:text-5xl select-none">To-Do List</h1>
                <AiOutlineProfile onClick={() => setOpenModal(true)} className="text-3xl sm:text-4xl duration-300 hover:opacity-40 cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
