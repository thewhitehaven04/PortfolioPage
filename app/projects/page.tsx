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
        <section className="flex flex-col gap-4 pt-4">
            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        images={project.images}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        url={project.url}
                        demoUrl={project.demoUrl}
                        stack={project.stack}
                    />
                ))}
            </div>
            <div className="flex flex-col items-center mb-2">
                <span>More projects are available on my GitHub.</span>
                <Link href="https://github.com/thewhitehaven04" className="link link-neutral" target="_blank">
                    Learn more
                </Link>
            </div>
        </section>
    )
}
