import type { ProjectCard } from "app/projects/ProjectCard"
import type { ComponentProps } from "react"
import f1StatsImg2 from "public/F1StatsProject/img2.png"
import f1StatsImg3 from "public/F1StatsProject/img3.png"
import f1StatsImg4 from "public/F1StatsProject/img4.png"
import f1StatsImg5 from "public/F1StatsProject/img5.png"
import f1StatsImg6 from "public/F1StatsProject/img6.png"
import {
    SiChartdotjs,
    SiCssmodules,
    SiFastapi,
    SiNextdotjs,
    SiPandas,
    SiPostgresql,
    SiReact,
    SiShadcnui,
    SiTailwindcss,
} from "react-icons/si"
import { CaptionedIcon } from "app/components/CaptionedIcon"

export const projects: ComponentProps<typeof ProjectCard>[] = [
    {
        title: "F1Stats",
        description:
            "I've been a passionate F1 nerd for the majority of my life. " +
            "With more public data available than ever, I decided to create a tool that would visualize it. " +
            "Many journalists have internal tooling that does similar things, but none of these tools are available to the public. " +
            "This app is meant to remedy that.",
        url: "https://github.com/thewhitehaven04/f1stats_nextjs",
        demoUrl: "https://f1stats-nextjs.vercel.app/",
        images: [
            { ...f1StatsImg2, id: "f1stats-img1", alt: "F1Stats screenshot 1" },
            { ...f1StatsImg3, id: "f1stats-img2", alt: "F1Stats screenshot 2" },
            { ...f1StatsImg4, id: "f1stats-img3", alt: "F1Stats screenshot 3" },
            { ...f1StatsImg5, id: "f1stats-img4", alt: "F1Stats screenshot 4" },
            { ...f1StatsImg6, id: "f1stats-img5", alt: "F1Stats screenshot 5" },
        ],
        stack: (
            <>
                <CaptionedIcon icon={<SiReact size={36} />} caption="React" />
                <CaptionedIcon icon={<SiNextdotjs size={36} />} caption="Next.js" />
                <CaptionedIcon icon={<SiShadcnui size={36} />} caption="shadcn/ui" />
                <CaptionedIcon icon={<SiTailwindcss size={36} />} caption="Tailwind" />
                <CaptionedIcon icon={<SiChartdotjs size={36} />} caption="Chart.js" />
                <CaptionedIcon icon={<SiFastapi size={36} />} caption="FastAPI" />
                <CaptionedIcon icon={<SiPandas size={36} />} caption="Pandas" />
                <CaptionedIcon icon={<SiPostgresql size={36} />} caption="PostgreSQL" />
            </>
        ),
    },
    {
        title: "Search palette",
        description: "A simple, composable, responsive and dependency-free search palette component built with React",
        url: "https://github.com/thewhitehaven04/command-palette",
        demoUrl: "https://github.com/thewhitehaven04/command-palette",
        images: [],
        stack: (
            <>
                <CaptionedIcon icon={<SiReact size={36} />} caption="React" />
                <CaptionedIcon icon={<SiCssmodules size={36} />} caption="CSS Modules" />
            </>
        ),
    },
]
