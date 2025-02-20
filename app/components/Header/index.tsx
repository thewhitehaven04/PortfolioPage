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
    <header className="flex flex-col gap-4">
        <AboutMe {...aboutMe} />
        <section className="flex flex-col pl-[80px]">
            <div className='grid grid-cols-[1px,64px,_1fr]'>
                <div className='h-8 border-2 border-primary rounded-sm'/>
                <div className='border-b-4 border-l-4 border-primary w-16 h-8 skew-x-[45deg] translate-x-4 rounded-b-sm'/>
                <div className="border-b-4 w-full border-primary" />
            </div>
            <p className="block font-xl border-4 border-t-0 rounded-b-xl p-4 border-primary">
                Front-end engineer with a vast background in quality assurance, passionate about all things tech and
                computer hardware, with a lot of experience working with dynamic international teams. I enjoy bringing
                user interfaces to life, helping build better products. Let's connect!
            </p>
        </section>
        <Contacts />
        <Navbar />
    </header>
)
