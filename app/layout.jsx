import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jeremie Todos",
    description: "To-do List",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="{inter.className}, flex flex-col min-h-screen relative bg-slate-900 text-white max-w-[1500px] w-full mx-auto ">
                <AuthProvider>
                    <Header />
                    <div id="portal"></div>
                    <main className="flex-1 flex flex-col p-6"> {children}</main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
