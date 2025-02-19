import { EducationItem } from "app/about/Education"
import { educationItems, workExperienceItems } from "app/about/items"
import { WorkExperienceItem } from "app/about/WorkExperienceItem"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "About me",
}

export default function About() {
    return (
        <div className='flex flex-col gap-8'>
            <section className="flex flex-col gap-4 pt-4">
                <h2 className="font-bold text-2xl tracking-tight">Work experience</h2>
                <div className="flex flex-col gap-4">
                    {workExperienceItems.map((item, index) => (
                        <WorkExperienceItem key={index} {...item} />
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-4 pt-4">
                <h2 className="font-bold text-2xl tracking-tight">Education</h2>
                <div className="flex flex-col gap-4">
                    {educationItems.map((item) => (
                        <EducationItem key={item.institution} {...item} />
                    ))}
                </div>
            </section>
        </div>
    )
}
