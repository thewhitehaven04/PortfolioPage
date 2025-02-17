import type { ProjectCard } from "app/projects/ProjectCard"
import type { ComponentProps } from "react"
import f1StatsImg1 from "public/F1StatsProject/img1.png"
import f1StatsImg2 from "public/F1StatsProject/img2.png"
import f1StatsImg3 from "public/F1StatsProject/img3.png"
import f1StatsImg4 from "public/F1StatsProject/img4.png"

export const projects: ComponentProps<typeof ProjectCard>[] = [
    {
        title: "F1Stats",
        description:
            "I've been a passionate F1 nerd for the majority of my life. " +
            "With more public data available than ever, I decided to create a tool that would visualize it. " +
            "Many journalists have their internal tooling that does similar things, but none of these tools are available to public. " +
            "This app is meant to fix that. Built with React Router v7 (previously Remix), Tailwind and Daisy UI.",
        url: "https://github.com/thewhitehaven04/f1stats",
        demoUrl: "https://f1stats-production.up.railway.app/",
        images: [
            { ...f1StatsImg1, id: "f1stats-img1", alt: "F1Stats screenshot 1" },
            { ...f1StatsImg2, id: "f1stats-img2", alt: "F1Stats screenshot 2" },
            { ...f1StatsImg3, id: "f1stats-img3", alt: "F1Stats screenshot 3" },
            { ...f1StatsImg4, id: "f1stats-img4", alt: "F1Stats screenshot 4" },
        ],
    },
]
