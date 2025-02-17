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
    SiTypescript,
    SiVite,
    SiWebpack,
} from "react-icons/si"

export default function Page() {
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 gap-y">
            <StackCard title="TypeScript" icon={<SiTypescript size={48} />} />
            <StackCard title="HTML" icon={<SiHtml5 size={48} />} />
            <StackCard title="CSS" icon={<SiCss3 size={48} />} />
            <StackCard title="React" icon={<SiReact size={48} />} />
            <StackCard title="React Router" icon={<SiReactrouter size={48} />} />
            <StackCard title="Remix" icon={<SiRemix size={48} />} />
            <StackCard title="TanStack Query" icon={<SiReactquery size={48} />} />
            <StackCard title="Tailwind" icon={<SiTailwindcss size={48} />} />
            <StackCard title="Remix" icon={<SiRemix size={48} />} />
            <StackCard title="styled-components" icon={<SiStyledcomponents size={48} />} />
            <StackCard title="Material UI" icon={<SiMaterialdesign size={48} />} />
            <StackCard title="React Hook Form" icon={<SiReacthookform size={48} />} />
            <StackCard title="Vite" icon={<SiVite size={48} />} />
            <StackCard title="Webpack" icon={<SiWebpack size={48} />} />
            <StackCard title="Node.js" icon={<SiNodedotjs size={48} />} />
        </div>
    )
}
