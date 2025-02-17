"use client"
import Link from "next/link"

const navItems = {
    "/about": { name: "About me" },
    "/projects": { name: "Projects" },
    "/stack": { name: "Stack" },
}

export function Navbar() {
    const pathname = window.location.pathname
    return (
        <div role="tablist" className="tabs p-2 tabs-boxed">
            {Object.keys(navItems).map((item) => (
                <Link key={item} href={item} className={"tab".concat(pathname === item ? " tab-active" : "")}>
                    {navItems[item].name}
                </Link>
            ))}
        </div>
    )
}
