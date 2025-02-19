import { AboutMe } from "app/components/Header/About"
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

export const Header = () => (
    <header className="flex flex-col gap-6">
        <AboutMe {...aboutMe} />
        <section className="flex flex-col pl-16">
            <div className='grid grid-cols-[32px,_1fr]'>
                <div className='border-t-4 border-l-4 border-neutral-300 w-8 h-8 skew-y-[45deg] translate-y-4'/>
                <div className="border-b-4 w-full border-neutral-300 translate-y-1" />
            </div>
            <p className="block font-xl border-4 border-t-0 rounded-b-xl p-4 border-neutral-300">
                Front-end engineer with a vast background in quality assurance, passionate about all things tech and
                computer hardware, with a lot of experience working with dynamic international teams. I enjoy bringing
                user interfaces to life, helping build better products. Let's connect!
            </p>
        </section>
        <Contacts />
        <Navbar />
    </header>
)
