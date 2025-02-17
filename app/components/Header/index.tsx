import { AboutMe } from "app/components/Header/About"
import { Achievement } from "app/components/Header/Achievement"
import { Navbar } from "app/components/Nav"
import type React from "react"
import type { ComponentProps } from "react"
import Image from "next/image"
import Profile from "public/profile.png"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6"

const aboutMe: ComponentProps<typeof AboutMe> = {
    name: "German Bulavkin",
    jobTitle: "Front-end Engineer",
    links: (
        <>
            <a href="https://github.com/thewhitehaven04">
                <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/german-bulavkin-866546340/">
                <FaLinkedin size={32} />
            </a>
            <a href="mailto:thewhitehaven04@gmail.com">
                <FaEnvelope size={32} />
            </a>
        </>
    ),
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
    <header className="flex flex-col gap-6 mb-3">
        <section>
            <AboutMe {...aboutMe} />
        </section>
        <section className="flex flex-row justify-evenly">
            {achievements.map((achievement) => (
                <Achievement key={achievement.description} {...achievement} />
            ))}
        </section>
        <Navbar />
    </header>
)
