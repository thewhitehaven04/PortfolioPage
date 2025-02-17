export const Achievement = (props: { title: string; description: string }) => (
    <article className="flex flex-col items-center gap-1">
        <span className="text-xl">{props.title}</span>
        <span className="text-lg">{props.description}</span>
    </article>
)
