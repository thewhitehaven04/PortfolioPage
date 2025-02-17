import { socialLinks } from "app/config"
import Link from "next/link"
import { FaDownload, FaEnvelope, FaLinkedin, FaTelegram } from "react-icons/fa6"

export const Contacts = () => {
    return (
        <div className="flex flex-row gap-4">
            <Link href="/CV_Bulavkin.pdf" target="_blank" className="btn btn-primary flex-1">
                Download CV <FaDownload size={24} />
            </Link>
            <Link href={socialLinks.linkedin} className="btn">
                <FaLinkedin size={24} />
            </Link>
            <Link href={socialLinks.telegram} className="btn">
                <FaTelegram size={24} />
            </Link>
            <Link href={socialLinks.email} className="btn">
                <FaEnvelope size={24} />
            </Link>
        </div>
    )
}
