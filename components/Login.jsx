"use client";

import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const { login, signup, currentUser } = useAuth();
    console.log(currentUser);

    async function submitHandler() {
        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }
        if (isLoggedIn) {
            try {
                await login(email, password);
            } catch (err) {
                setError("incorrect email or password");
            }
            return;
        }
        await signup(email, password);
    }

    return (
        <section id="login" className="flex-1  flex flex-col justify-center items-center text-xs sm:text-sm gap-2 sm:gap-4">
            <h1 className="font-extrabold text-2xl sm:text-4xl select-none">{!isLoggedIn ? "Please register below" : "LOGIN"}</h1>
            {error && <div className="w-full max-w-[40ch] text-center text-rose-400">{error}</div>}
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email Address"
                className="outline-none duration-300 border-b-2 border-white focus:border-cyan-300  text-slate-900 p-2 max-w-[40ch] w-full"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="outline-none duration-300 border-b-2 border-white focus:border-cyan-300 text-slate-900 p-2 max-w-[40ch] w-full"
            />
            <button
                onClick={submitHandler}
                className="w-full max-w-[40ch] border border-white py-2  relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900 "
            >
                <h2 className="relative z-20">SUBMIT</h2>
            </button>
            <h2 onClick={() => setIsLoggedIn(!isLoggedIn)} className=" duration-300 hover:scale-110 cursor-pointer">
                {!isLoggedIn ? "Login" : "Register"}
            </h2>
        </section>
    );
};

export default Login;
