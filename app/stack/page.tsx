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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 gap-y">
            <StackCard title="TypeScript" icon={<SiTypescript />} />
            <StackCard title="HTML" icon={<SiHtml5 />} />
            <StackCard title="CSS" icon={<SiCss3 />} />
            <StackCard title="React" icon={<SiReact />} />
            <StackCard title="React Router" icon={<SiReactrouter />} />
            <StackCard title="Remix" icon={<SiRemix />} />
            <StackCard title="TanStack Query" icon={<SiReactquery />} />
            <StackCard title="Tailwind" icon={<SiTailwindcss />} />
            <StackCard title="Remix" icon={<SiRemix />} />
            <StackCard title="styled-components" icon={<SiStyledcomponents />} />
            <StackCard title="Material UI" icon={<SiMaterialdesign />} />
            <StackCard title="React Hook Form" icon={<SiReacthookform />} />
            <StackCard title="Vite" icon={<SiVite />} />
            <StackCard title="Webpack" icon={<SiWebpack />} />
            <StackCard title="Node.js" icon={<SiNodedotjs />} />
        </div>
    )
}
