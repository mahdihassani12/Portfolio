"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b border-black">
            <div className="mx-auto flex max-w-7xl items-stretch px-6">

                {/* Logo Section */}
                <div className="flex w-1/2 items-center border-r border-black px-6 py-4 md:w-auto">
                    <span className="text-2xl font-bold tracking-tight text-left">
                        Mahdi Hassani
                    </span>
                </div>

                {/* Navigation Section (Desktop) */}
                <nav className="hidden flex-1 items-center justify-center border-r border-black px-6 py-4 md:flex">
                    <div className="flex gap-10">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/portfolio">Portfolio</NavLink>
                    </div>
                </nav>

                {/* Actions Section */}
                <div className="flex w-1/2 items-center justify-end px-6 py-4 md:w-auto">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-2xl md:hidden"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>

                    {/* CTA (Desktop only) */}
                    <Link
                        href="/get-started"
                        className="hidden rounded-md bg-slate-900 px-5 py-2 text-xl font-medium text-white transition hover:bg-slate-800 md:block"
                    >
                        Get Started
                    </Link>
                </div>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-black md:hidden">
                    <nav className="flex flex-col gap-4 px-6 py-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/portfolio">Portfolio</NavLink>
                        <NavLink href="/contact">Contact Us</NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="text-xl font-medium transition hover:opacity-70"
        >
            {children}
        </Link>
    );
}
