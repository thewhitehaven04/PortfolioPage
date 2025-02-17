export interface IWorkExperienceItemProps {
    from: string
    till: string
    description: string
    organization: string
    position: string
}

export const WorkExperienceItem = (props: IWorkExperienceItemProps) => {
    const { from, till, description, organization, position } = props

    return (
        <article className="flex flex-col gap-2">
            <div className="font-medium bg-yellow-200 w-max px-2 py-1 text-gray-900 rounded">
                {from} - {till}
            </div>
            <h1 className="text-2xl font-bold">{organization}</h1>
            <h2 className="text-xl font-bold">{position}</h2>
            <p className='ml-2 mt-4'>{description}</p>
        </article>
    )
}
