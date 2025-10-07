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
                <li>
                    Developed interfaces for compliance- and fraud analysis and automated information requests to
                    clients as a part of inter-team collaborative work that reduced decision time from 2 days to 3 hours
                </li>
                <li>Migrated UI to internal design kit, improving brand consistency and reducing development time</li>
                <li>Introduced unit- and component-level tests that accelerated the release cycle.</li>
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
                <li>
                    Developed mocks to simulate external integrations, reducing production defects from edge-case
                    scenarios
                </li>
                <li>Automated UI and API tests, shortening release cycle by 60–70%</li>
                <li>Created standardized integration testing guidelines, saving other teams’ time</li>
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
                <li>
                    Automated testing processes, accelerating release cycles and enabling faster delivery of new
                    features
                </li>
                <li>
                    Developed test plan for integrating a bank with a new retail accounting system, ensuring smooth
                    deployment
                </li>
                <li>
                    Mentored junior testers and contributed to integrated product teams, improving overall team
                    efficiency
                </li>
            </ul>
        ),
    },
    {
        position: "QA Engineer",
        from: "July 2019",
        till: "February 2020",
        organization: "Bytex LLC",
        description: (
            <ul>
                <li>Logged numerous defect reports, which improved product quality</li>
                <li>Learned functional and non-functional testing principles</li>{" "}
                <li>Gained knowledge of software development lifecycle and QA documentation</li>
            </ul>
        ),
    },
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
