import { socialLinks } from "app/config"
import Link from "next/link"
import { FaDownload, FaEnvelope, FaLinkedin, FaTelegram } from "react-icons/fa6"

export const Contacts = () => {
    return (
        <section className="grid grid-cols-3 grid-rows-2 md:grid-cols-[1fr,_48px,_48px,_48px] md:grid-rows-1 gap-x-4 gap-y-2 mb-2">
            <Link
                href="/CV_Bulavkin.pdf"
                target="_blank"
                className="btn btn-primary flex-1 text-lg col-span-3 md:col-span-1"
            >
                Download CV <FaDownload />
            </Link>
            <Link href={socialLinks.linkedin} className="btn p-1 text-2xl">
                <FaLinkedin />
            </Link>
            <Link href={socialLinks.telegram} className="btn p-1 text-2xl">
                <FaTelegram />
            </Link>
            <Link href={socialLinks.email} className="btn p-1 text-2xl">
                <FaEnvelope />
            </Link>
        </section>
    )
}
