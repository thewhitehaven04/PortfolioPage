import { StackCard } from "app/stack/StackCard"
import {
    SiCss3,
    SiHtml5,
    SiMaterialdesign,
    SiNodedotjs,
    SiReact,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRemix,
    SiStyledcomponents,
    SiTailwindcss,
    SiTestinglibrary,
    SiTypescript,
    SiVite,
    SiWebpack,
} from "react-icons/si"

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 gap-y">
            <StackCard title="TypeScript" icon={<SiTypescript size={36} />} />
            <StackCard title="HTML" icon={<SiHtml5 size={36} />} />
            <StackCard title="CSS" icon={<SiCss3 size={36} />} />
            <StackCard title="React" icon={<SiReact size={36} />} />
            <StackCard title="React Router" icon={<SiReactrouter size={36} />} />
            <StackCard title="Remix" icon={<SiRemix size={36} />} />
            <StackCard title="TanStack Query" icon={<SiReactquery size={36} />} />
            <StackCard title="Tailwind" icon={<SiTailwindcss size={36} />} />
            <StackCard title="Remix" icon={<SiRemix size={36} />} />
            <StackCard title="styled-components" icon={<SiStyledcomponents size={36} />} />
            <StackCard title="Material UI" icon={<SiMaterialdesign size={36} />} />
            <StackCard title="React Hook Form" icon={<SiReacthookform size={36} />} />
            <StackCard title="Vite" icon={<SiVite size={36} />} />
            <StackCard title="Webpack" icon={<SiWebpack size={36} />} />
            <StackCard title="Node.js" icon={<SiNodedotjs size={36} />} />
            <StackCard title="Testing library" icon={<SiTestinglibrary size={36} />} />
        </div>
    )
}
