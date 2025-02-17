import type { ReactNode } from "react"

export const AboutMe = (props: { name: string; jobTitle: string; links: ReactNode; photo: ReactNode }) => (
    <div className="grid grid-cols-[160px,_1fr] gap-x-6 grid-rows-[64px,_36px,_1fr] items-start justify-start text-gray-700">
        <div className="avatar col-start-1 row-start-1 row-span-3">
            <div className="ring ring-primary ring-offset-4 ring-offset-base-100 rounded-full">{props.photo}</div>
        </div>
        <div className="col-start-2 row-start-1">
            <span className="text-xl text-gra">Hi there, my name is</span>
            <h1 className="col-start-2 row-start-1 text-3xl font-bold text-gray-950">{props.name}</h1>
        </div>
        <h1 className="col-start-2 row-start-2 text-xl font-medium">{props.jobTitle}</h1>
        <div className="flex flex-row h-24 gap-4 row-start-3">{props.links}</div>
    </div>
)
