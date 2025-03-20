import { StackCard } from "app/stack/StackCard"
import {
    SiDaisyui,
    SiExpress,
    SiFastapi,
    SiMaterialdesign,
    SiMongoose,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRemix,
    SiStyledcomponents,
    SiTailwindcss,
    SiTestinglibrary,
    SiVite,
    SiWebpack,
} from "react-icons/si"

export default function Page() {
    return (
        <section className="flex flex-col gap-4 pt-4">
            <section className="flex flex-col items-center md:items-start gap-2">
                <h1 className="font-bold text-2xl">Libraries</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-2">
                    <StackCard title="React" icon={<SiReact size={36} />} />
                    <StackCard title="React Router" icon={<SiReactrouter size={36} />} />
                    <StackCard title="Remix" icon={<SiRemix size={36} />} />
                    <StackCard title="TanStack Query" icon={<SiReactquery size={36} />} />
                    <StackCard title="React Hook Form" icon={<SiReacthookform size={36} />} />
                    <StackCard title="Next.js" icon={<SiNextdotjs size={36} />} />
                </div>
            </section>
            <section className="flex flex-col items-center md:items-start gap-2">
                <h1 className="font-bold text-2xl">Toolchain</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-2">
                    <StackCard title="Vite" icon={<SiVite size={36} />} />
                    <StackCard title="Webpack" icon={<SiWebpack size={36} />} />
                    <StackCard title="Testing library" icon={<SiTestinglibrary size={36} />} />
                </div>
            </section>
            <section className="flex flex-col items-center md:items-start gap-2">
                <h1 className="font-bold text-2xl">CSS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-2">
                    <StackCard title="Tailwind" icon={<SiTailwindcss size={36} />} />
                    <StackCard title="styled-components" icon={<SiStyledcomponents size={36} />} />
                    <StackCard title="Material UI" icon={<SiMaterialdesign size={36} />} />
                    <StackCard title="DaisyUI" icon={<SiDaisyui size={36} />} />
                </div>
            </section>
            <section className="flex flex-col items-center md:items-start gap-2">
                <h1 className="font-bold text-2xl">Backend</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-2">
                    <StackCard title="Node.js" icon={<SiNodedotjs size={36} />} />
                    <StackCard title="Express" icon={<SiExpress size={36} />} />
                    <StackCard title="Mongoose" icon={<SiMongoose size={36} />} />
                    <StackCard title="Python" icon={<SiPython size={36} />} />
                    <StackCard title="FastAPI" icon={<SiFastapi size={36} />} />
                </div>
            </section>
        </section>
    )
}
