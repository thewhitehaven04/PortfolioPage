import type { ReactNode } from "react"

export const StackCard = (props: { title: string; icon: ReactNode }) => (
    <article className="card card-compact card-side px-4 py-1 border-[1px] shadow-md border-neutral-200 dark:shadow-primary-content dark:border-primary dark:shadow-sm bg-white flex flex-row items-center">
        <div className="flex flex-col justify-center items-center">{props.icon}</div>
        <div className="card-body">
            <span className="card-title">{props.title}</span>
        </div>
    </article>
)
