import type { IEducationItemProps } from "app/about/Education"
import type { IWorkExperienceItemProps } from "app/about/WorkExperienceItem"

export const workExperienceItems: IWorkExperienceItemProps[] = [
    {
        position: "Junior Frontend Developer",
        from: "March 2024",
        till: "December 2024",
        organization: "Stenn International",
        description: (
            <ul>
                <li>Feature development for back-office clients</li>
                <li>Migrated the product's team features to the internal design system UI kit</li>
                <li> Collaborated with UX and UI designers to implementdesign changes</li>
            </ul>
        ),
    },
    {
        position: "QA Automation Engineer",
        from: "December 2022",
        till: "February 2024",
        organization: "Stenn International",
        description: <span>placeholder</span>,
    },
]

export const educationItems: IEducationItemProps[] = [
    {
        from: "2015",
        till: "2017",
        institution: "Nizhny Novgorod Lobachevsky State University",
        profile: "Bachelor of Science in Computer Science",
    },
    {
        from: "2017",
        till: "2019",
        institution: "Mordovian State University",
        profile: "Bachelor of Science in Computer Science",
    },
]
