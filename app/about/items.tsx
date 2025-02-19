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
                <li>Development of UI simplifying compliance and fraud-related business flows</li>
                <li>Migrated the product's team features to the internal design system UI kit</li>
                <li>Helped maintain the internal UI kit library</li>
            </ul>
        ),
    },
    {
        position: "QA Automation Engineer",
        from: "December 2022",
        till: "February 2024",
        organization: "Stenn International",
        description: (
            <ul>
                <li>Conducted Ul and API automated testing with Pytest</li>
                <li>Optimised product team testing practices and coverage</li>
            </ul>
        ),
    },
    {
        position: "QA Automation Engineer",
        from: "April 2020",
        till: "October 2022",
        organization: "IBS Appline",
        description: (
            <ul>
                <li>Performed UI and API testing of web- and SAP-based applications</li>
                <li>Refined testing policies, procedures and scripts</li>
            </ul>
        ),
    },
{
        position: "QA Engineer",
        from: "July 2019",
        till: "February 2020",
        organization: "Bytex LLC",
        description: null,
    }
]

export const educationItems: IEducationItemProps[] = [
    {
        from: "2017",
        till: "2019",
        institution: "Mordovian State University",
        profile: "Bachelor of Science in Computer Science",
    },
    {
        from: "2015",
        till: "2017",
        institution: "Nizhny Novgorod Lobachevsky State University",
        profile: "Bachelor of Science in Computer Science",
    },
]
