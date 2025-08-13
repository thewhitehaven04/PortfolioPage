import type React from "react"
import type { ComponentProps } from "react"
import Image from "next/image"
import Profile from "public/profile.jpg"
import { Contacts } from "app/components/Header/Contacts"
import { Summary } from "app/components/Header/Summary"
import { AboutMe } from "app/components/Header/About"
import { Navbar } from "app/components/Nav"

const aboutMe: ComponentProps<typeof AboutMe> = {
    name: "German Bulavkin",
    jobTitle: "Front-End Engineer",
    photo: <Image src={Profile} alt="Profile" height={256} width={256}/>,
}

export const Header = () => (
    <header className="flex flex-col gap-4">
        <AboutMe {...aboutMe} />
        <Summary />
        <Contacts />
        <Navbar />
    </header>
)
