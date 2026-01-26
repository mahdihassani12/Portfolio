"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-black">
            <div className="mx-auto flex items-stretch px-6">

                {/* Logo */}
                <div className="flex w-1/2 items-center border-r border-black px-6 py-4 md:w-1/5">
                    <Link href="/" className="text-2xl font-bold">
                        Mahdi Hassani
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center justify-center border-r border-black px-6 py-4 md:flex md:w-3/5">
                    <div className="flex gap-10">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/portfolio">Portfolio</Link>
                    </div>
                </nav>

                {/* Actions */}
                <div className="flex w-1/2 items-center justify-end px-6 py-4 md:w-1/5">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-2xl md:hidden cursor-pointer"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        ☰
                    </button>

                    {/* Desktop Button */}
                    <Link
                        href="/get-started"
                        className="hidden rounded-md bg-black px-4 py-2 text-white md:block"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    id="mobile-menu"
                    className="border-t border-black md:hidden"
                >
                    <nav className="flex flex-col gap-4 px-6 py-6">
                        <MobileLink href="/" close={() => setOpen(false)}>Home</MobileLink>
                        <MobileLink href="/about" close={() => setOpen(false)}>About Us</MobileLink>
                        <MobileLink href="/services" close={() => setOpen(false)}>Services</MobileLink>
                        <MobileLink href="/portfolio" close={() => setOpen(false)}>Portfolio</MobileLink>
                        <MobileLink href="/contact" close={() => setOpen(false)}>Contact Us</MobileLink>
                    </nav>
                </div>
            )}
        </header>
    );
}

function MobileLink({
    href,
    close,
    children,
}: {
    href: string;
    close: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={close}
            className="text-xl font-medium"
        >
            {children}
        </Link>
    );
}