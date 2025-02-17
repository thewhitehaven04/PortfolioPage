import { workExperienceItems } from "app/about/items"
import { WorkExperienceItem } from "app/about/WorkExperienceItem"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "About me",
}

export default function About() {
    return (
        <section className="">
            <h2 className="font-bold text-xl">Work experience</h2>
            <div className="flex flex-col gap-4">
                {workExperienceItems.map((item) => (
                    <WorkExperienceItem key={item.description} {...item} />
                ))}
            </div>
        </section>
    )
}
