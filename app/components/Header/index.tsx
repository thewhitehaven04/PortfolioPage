import { AboutMe } from "app/components/Header/About"
import { Achievement } from "app/components/Header/Achievement"
import { Navbar } from "app/components/Nav"
import type React from "react"
import type { ComponentProps } from "react"
import Image from "next/image"
import Profile from "public/profile.png"
import { Contacts } from "app/components/Header/Contacts"

const aboutMe: ComponentProps<typeof AboutMe> = {
    name: "German Bulavkin",
    jobTitle: "Front-End Engineer",
    photo: <Image src={Profile} alt="Profile" height={256} width={256} />,
}

const achievements: ComponentProps<typeof Achievement>[] = [
    {
        title: "1",
        description: "Year of front-end dev experience",
    },
    {
        title: "5",
        description: "Years of experience in tech",
    },
]

export const Header = () => (
    <header className="flex flex-col gap-6">
        <AboutMe {...aboutMe} />
        <Contacts />
        <section className="flex flex-col md:flex-row justify-evenly">
            {achievements.map((achievement) => (
                <Achievement key={achievement.description} {...achievement} />
            ))}
        </section>
        <Navbar />
    </header>
)
