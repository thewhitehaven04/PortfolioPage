import type { ReactNode } from 'react'

export interface IWorkExperienceItemProps {
    from: string
    till: string
    description: ReactNode 
    organization: string
    position: string
}

export const WorkExperienceItem = (props: IWorkExperienceItemProps) => {
    const { from, till, description, organization, position } = props

    return (
        <article className="card flex flex-col gap-2">
            <h2 className="text-xl font-bold">{position}</h2>
            <div className="flex flex-row gap-4 font-medium">
                <div className="w-max px-2 py-1 bg-primary rounded dark:text-primary-content">
                    {from} - {till}
                </div>
                <h1 className="text-xl font-bold">{organization}</h1>
            </div>
            {description}
        </article>
    )
}
