import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b border-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div>
                    <Link href="/" className="text-2xl font-bold">Mahdi Hassani</Link>
                </div>

                <nav className="flex gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/portfolio">Portfolio</Link>
                </nav>

                <div>
                    <Link href="/contact" className="rounded-md bg-black px-4 py-2 text-white">Get Started</Link>
                </div>
            </div>
        </header>
    )
}