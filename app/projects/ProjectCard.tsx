import type { StaticImageData } from "next/image"
import Image from "next/image"
import type { ReactNode } from "react"

export const ProjectCard = (props: {
    images: (StaticImageData & { alt: string; id: string })[]
    title: string
    description: string
    url: string
    demoUrl: string | null
    stack: ReactNode
}) => {
    const { images, title, description, url, demoUrl, stack } = props

    return (
        <article className="card bg-base-50 border-gray-300 overflow-hidden max-w-full flex flex-col items-center">
            <div className="carousel w-full mb-2">
                {images.map((image) => (
                    <Image
                        key={image.src}
                        alt={image.alt}
                        src={image.src}
                        height={image.height}
                        width={image.width}
                        id={image.id}
                        className="carousel-item object-contain max-w-full max-h-[600px] aspect-auto rounded-lg"
                    />
                ))}
            </div>
            <div className="flex flex-row gap-1 justify-center">
                {images.map((image, index) => (
                    <a key={image.id} href={`#${image.id}`}>
                        <button type="button" className={"btn btn-xs btn-primary drop-shadow"}>
                            {index + 1}
                        </button>
                    </a>
                ))}
            </div>
            <div className="card-body flex flex-col items-stretch w-full gap-4">
                <h2 className="font-bold">{title}</h2>
                <p>{description}</p>
                <h2 className="font-bold">Tech stack</h2>
                <div className="flex flex-row gap-4 flex-wrap justify-center mb-2">{stack}</div>
                <div className="flex flex-row gap-8 justify-center drop-shadow-md">
                    <a href={url} target="_blank">
                        <button type="button" className="btn btn-md btn-neutral">
                            Repository
                        </button>
                    </a>
                    {demoUrl && (
                        <a href={demoUrl} target="_blank">
                            <button type="button" className="btn btn-md btn-primary">
                                Demo
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}
