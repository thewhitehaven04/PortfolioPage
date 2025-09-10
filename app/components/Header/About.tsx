import { type ReactNode } from "react"

export const AboutMe = (props: { name: string; jobTitle: string; photo: ReactNode }) => (
    <section className="grid grid-cols-[120px,_1fr] md:grid-cols-[160px,_1fr] grid-rows-1 gap-x-16 justify-between text-gray-700">
        <div className="avatar col-start-1 p-3 row-start-1 row-span-3 items-center justify-center">
            <div className="ring-4 ring-primary ring-offset-8 ring-offset-base-100 rounded-full">{props.photo}</div>
        </div>
        <div className="col-start-2 row-start-1 flex flex-col gap-4 justify-center items-start">
            <span className="text-xl text-gray-700 hidden md:block">Hi there, my name is</span>
            <h1 className="col-start-2 row-start-1 text-4xl font-bold">{props.name}</h1>
            <h1 className="col-start-2 row-start-2 text-xl font-medium text-gray-700">{props.jobTitle}</h1>
        </div>
    </section>
)
