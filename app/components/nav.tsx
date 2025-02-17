"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = {
    "/about": { name: "About me" },
    "/projects": { name: "Projects" },
    "/stack": { name: "Stack" },
}

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <div role="tablist" className="tabs tabs-lg p-3 tabs-boxed">
            {Object.keys(navItems).map((item) => (
                <Link
                    key={item}
                    href={item}
                    className={"text-lg tab".concat(pathname === item ? " tab-active" : "")}
                >
                    {navItems[item].name}
                </Link>
            ))}
        </div>
    )
}
