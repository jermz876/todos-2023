import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-3 py-2 ">
            <h3>built by Jeremie Binns</h3>
            <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/jeremie-binns-4bb90525a/">
                    <AiFillLinkedin className="duration-300 hover:opacity-30 cursor-pointer text-3xl" />
                </a>
                <a href="https://github.com/jermz876">
                    <AiFillGithub className="duration-300 hover:opacity-30 cursor-pointer text-3xl " />
                </a>
            </div>
        </section>
    );
};

export default Footer;
