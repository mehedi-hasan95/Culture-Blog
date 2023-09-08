"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import menus from "@/utility/Menu.json";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import ThemeMode from "./ThemeMode";
const NavMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const isOpen = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto">
                <div className="flex justify-between md:justify-normal items-center">
                    <div className="md:flex md:flex-1 gap-4 hidden">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                    <h1 className="md:flex-1 text-3xl dark:text-gray-100 text-center">
                        <Link href="/">CultureWeb</Link>
                    </h1>
                    <nav className="md:flex gap-5 md:flex-1 justify-end hidden">
                        <ThemeMode />
                        {menus.map((menu) => (
                            <Link key={menu._id} href={menu.url}>
                                {menu.name}
                            </Link>
                        ))}
                        <Link href="/login">Login</Link>
                    </nav>
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={isOpen}
                    >
                        {openMenu ? <MdClose /> : <FaBars />}
                    </button>
                </div>
                {openMenu && (
                    <nav className="md:hidden overflow-hidden py-10 gap-5 flex flex-col bg-gray-100 dark:bg-gray-800 px-5 transition-all duration-1000 ease-in-out h-screen dark:text-white">
                        <ThemeMode onClick={() => setOpenMenu(false)} />
                        {menus.map((menu) => (
                            <Link
                                onClick={() => setOpenMenu(false)}
                                key={menu._id}
                                href={menu.url}
                            >
                                {menu.name}
                            </Link>
                        ))}
                        <Link href="/login">Login</Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default NavMenu;
