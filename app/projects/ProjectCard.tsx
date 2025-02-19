import type { StaticImageData } from "next/image"
import Image from "next/image"
import type { ReactNode } from 'react'

export const ProjectCard = (props: {
    images: (StaticImageData & { alt: string; id: string })[]
    title: string
    description: string
    url: string
    demoUrl: string
    stack: ReactNode
}) => {
    const { images, title, description, url, demoUrl, stack } = props

    return (
        <article className="card bg-base-50 border-gray-300 overflow-hidden">
            <div className="carousel w-full mb-2">
                {images.map((image) => (
                    <Image
                        key={image.src}
                        alt={image.alt}
                        src={image.src}
                        height={500}
                        width={1000}
                        id={image.id}
                        className="carousel-item w-full rounded-lg shadow-md"
                    />
                ))}
            </div>
            <div className="flex flex-row gap-1 justify-center">
                {images.map((image, index) => (
                    <a key={image.id} href={`#${image.id}`}>
                        <button type="button" className={"btn btn-xs btn-primary drop-shadow"}>
                            {index}
                        </button>
                    </a>
                ))}
            </div>
            <div className="card-body flex flex-col gap-4">
                <h2 className="font-bold">{title}</h2>
                <p>{description}</p>
                <h2 className="font-bold">Tech stack</h2>
                <div className='flex flex-row gap-4 h-16 justify-center mb-2'>
                    {stack}
                </div>
                <div className="flex flex-row gap-8 justify-center drop-shadow-md">
                    <a href={url} target="_blank">
                        <button type="button" className="btn btn-md btn-neutral">
                            Repository
                        </button>
                    </a>
                    <a href={demoUrl} target="_blank">
                        <button type="button" className="btn btn-md btn-primary">
                            Demo
                        </button>
                    </a>
                </div>
            </div>
        </article>
    )
}
