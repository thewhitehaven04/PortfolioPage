import type { StaticImageData } from "next/image"
import Image from "next/image"

export const ProjectCard = (props: {
    images: (StaticImageData & { alt: string; id: string })[]
    title: string
    description: string
    url: string
    demoUrl: string
}) => {
    const { images, title, description, url, demoUrl } = props

    return (
        <article className="card border-gray-300 shadow-lg overflow-hidden">
            <div className="carousel w-full mb-4">
                {images.map((image) => (
                    <Image
                        key={image.src}
                        alt={image.alt}
                        src={image.src}
                        height={500}
                        width={1000}
                        id={image.id}
                        className="carousel-item w-full rounded-lg"
                    />
                ))}
            </div>
            <div className="flex flex-row gap-1 justify-center">
                {images.map((image, index) => (
                    <a key={image.id} href={`#${image.id}`}>
                        <button type="button" className={"btn btn-xs"}>
                            {index}
                        </button>
                    </a>
                ))}
            </div>
            <div className="card-body flex flex-col gap-4">
                <h2 className='font-bold'>{title}</h2>
                <p>{description}</p>
                <div className="flex flex-row gap-8 justify-center">
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
