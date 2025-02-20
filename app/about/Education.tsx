export interface IEducationItemProps {
    from: string
    till: string
    institution: string
    profile: string
}

export const EducationItem = (props: IEducationItemProps) => (
    <article className="card flex flex-col gap-2">
        <div className="bg-yellow-200 w-max px-2 py-1 bg-primary rounded dark:text-primary-content">
            {props.from} - {props.till}
        </div>
        <h2 className="text-xl font-bold">{props.institution}</h2>
        <span>{props.profile}</span>
    </article>
)
