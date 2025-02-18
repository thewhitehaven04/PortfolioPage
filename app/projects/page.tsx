import type { Metadata } from "next"
import { projects } from "./projectData"
import { ProjectCard } from "app/projects/ProjectCard"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My portfolio",
}

export default function Portfolio() {
    return (
        <section className='flex flex-col gap-4 pt-4'>
            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
            <div>
                {projects.map((project) => (
                    <ProjectCard
                        images={project.images}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        url={project.url}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
            <div className="flex flex-row whitespace-pre justify-center">
                <span>More projects are available on my</span>&nbsp;
                <Link href="https://github.com/thewhitehaven04" className="link link-neutral" target="_blank">
                    Github
                </Link>
            </div>
        </section>
    )
}
