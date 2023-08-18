"use client";

import { Login, UserDashboard } from "@/components";
import Image from "next/image";
// import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
    const { currentUser } = useAuth();

    return (
        <>
            {!currentUser && <Login />}
            {currentUser && <UserDashboard />}
        </>
    );
}
