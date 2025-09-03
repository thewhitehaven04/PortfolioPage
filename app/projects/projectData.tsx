import { CaptionedIcon } from "app/components/CaptionedIcon"
import type { ProjectCard } from "app/projects/ProjectCard"
import type { ComponentProps } from "react"
import f1StatsImg0 from "public/F1StatsProject/img0.png"
import f1StatsImg1 from "public/F1StatsProject/img1.png"
import f1StatsImg2 from "public/F1StatsProject/img2.png"
import f1StatsImg3 from "public/F1StatsProject/img3.png"
import f1StatsImg4 from "public/F1StatsProject/img4.png"
import f1StatsImg5 from "public/F1StatsProject/img5.png"
import f1StatsImg6 from "public/F1StatsProject/img6.png"
import f1StatsImg7 from "public/F1StatsProject/img7.png"
import f1StatsNativeBox from "public/F1StatsNative/box.png"
import f1StatsNativeChart from "public/F1StatsNative/chart.png"
import f1StatsNativeHero from "public/F1StatsNative/hero.png"
import f1StatsNativeLapTable from "public/F1StatsNative/lap_table.png"
import f1StatsNativeResults from "public/F1StatsNative/results.png"
import f1StatsNativeSeasonMenu from "public/F1StatsNative/season_menu.png"
import f1StatsNativeTelemetry from "public/F1StatsNative/telemetry.png"
import Vue1 from "public/VueFormBuilder/Vue1.png"
import Vue2 from "public/VueFormBuilder/Vue2.png"
import Vue3 from "public/VueFormBuilder/Vue3.png"
import Vue4 from "public/VueFormBuilder/Vue4.png"
import Vue5 from "public/VueFormBuilder/Vue5.png"
import Vue6 from "public/VueFormBuilder/Vue6.png"
import Vue7 from "public/VueFormBuilder/Vue7.png"
import Vue8 from "public/VueFormBuilder/Vue8.png"
import Vue9 from "public/VueFormBuilder/Vue9.png"

import {
    SiChartdotjs,
    SiCssmodules,
    SiD3Dotjs,
    SiExpo,
    SiFastapi,
    SiNextdotjs,
    SiPandas,
    SiPostgresql,
    SiPrimevue,
    SiPrisma,
    SiReact,
    SiRedux,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiVuedotjs,
} from "react-icons/si"

export const projects: ComponentProps<typeof ProjectCard>[] = [
    {
        title: "F1Stats",
        description:
            "I've been a passionate F1 nerd for the majority of my life. " +
            "With more public data available than ever, I decided to create a tool that would visualize it. " +
            "Many journalists have internal tooling that does similar things, but none of these tools are available to the public. " +
            "This app is meant to remedy that.",
        url: "https://github.com/thewhitehaven04/f1stats_nextjs",
        demoUrl: "https://f1stats-nextjs.vercel.app/",
        images: [
            { ...f1StatsImg0, id: "f1stats-img8", alt: "F1Stats screenshot 1", height: 1080, width: 1920 },
            { ...f1StatsImg1, id: "f1stats-img1", alt: "F1Stats screenshot 2", height: 1080, width: 1920 },
            { ...f1StatsImg2, id: "f1stats-img2", alt: "F1Stats screenshot 3", height: 1080, width: 1920 },
            { ...f1StatsImg3, id: "f1stats-img3", alt: "F1Stats screenshot 4", height: 1080, width: 1920 },
            { ...f1StatsImg4, id: "f1stats-img4", alt: "F1Stats screenshot 5", height: 1080, width: 1920 },
            { ...f1StatsImg5, id: "f1stats-img5", alt: "F1Stats screenshot 6", height: 1080, width: 1920 },
            { ...f1StatsImg6, id: "f1stats-img6", alt: "F1Stats screenshot 7", height: 1080, width: 1920 },
            { ...f1StatsImg7, id: "f1stats-img7", alt: "F1Stats screenshot 8", height: 1080, width: 1920 },
        ],
        stack: (
            <>
                <CaptionedIcon icon={<SiReact size={36} />} caption="React" />
                <CaptionedIcon icon={<SiNextdotjs size={36} />} caption="Next.js" />
                <CaptionedIcon icon={<SiShadcnui size={36} />} caption="shadcn/ui" />
                <CaptionedIcon icon={<SiPrisma size={36} />} caption="Prisma" />
                <CaptionedIcon icon={<SiTailwindcss size={36} />} caption="Tailwind" />
                <CaptionedIcon icon={<SiChartdotjs size={36} />} caption="Chart.js" />
                <CaptionedIcon icon={<SiFastapi size={36} />} caption="FastAPI" />
                <CaptionedIcon icon={<SiPandas size={36} />} caption="Pandas" />
                <CaptionedIcon icon={<SiPostgresql size={36} />} caption="PostgreSQL" />
            </>
        ),
    },
    {
        title: "F1 Stats (mobile app)",
        description: "Implementation of the F1Stats built with React Native for iOS",
        url: "https://github.com/thewhitehaven04/f1stats_mobile",
        demoUrl: null,
        images: [
            { ...f1StatsNativeHero, id: "f1stats-native-hero", alt: "Hero screen", height: 544, width: 1103 },
            { ...f1StatsNativeBox, id: "f1stats-native-box", alt: "Box chart screen", height: 544, width: 1103 },
            {
                ...f1StatsNativeChart,
                id: "f1stats-native-chart",
                alt: "Scatter chart screen",
                height: 544,
                width: 1103,
            },
            {
                ...f1StatsNativeLapTable,
                id: "f1stats-native-lap-table",
                alt: "Lap H2H screen",
                height: 544,
                width: 1103,
            },
            { ...f1StatsNativeResults, id: "f1stats-native-results", alt: "Results screen", height: 544, width: 1103 },
            {
                ...f1StatsNativeSeasonMenu,
                id: "f1stats-native-season-menu",
                alt: "Event selection screen",
                height: 544,
                width: 1103,
            },
            {
                ...f1StatsNativeTelemetry,
                id: "f1stats-native-telemetry",
                alt: "Telemetry screen",
                height: 544,
                width: 1103,
            },
        ],
        stack: (
            <>
                <CaptionedIcon icon={<SiReact size={36} />} caption="React Native" />
                <CaptionedIcon icon={<SiD3Dotjs size={36} />} caption="D3.js" />
                <CaptionedIcon icon={<SiExpo size={36} />} caption="Expo router" />
                <CaptionedIcon icon={<SiRedux size={36} />} caption="Redux Toolkit" />
                <CaptionedIcon icon={<SiPrisma size={36} />} caption="Prisma" />
            </>
        ),
    },
    {
        title: "Form Builder",
        description: "Form builder application written in Vue",
        url: "https://github.com/thewhitehaven04/FormBuilderVue",
        demoUrl: "https://thewhitehaven04.github.io/FormBuilderVue/",
        images: [
            {
                ...Vue1,
                id: "form-builder",
                alt: "Form editing page",
                height: 992,
                width: 1923,
            },
            {
                ...Vue2,
                id: "sign-in-form-builder",
                alt: "Sign in form",
                height: 992,
                width: 1923,
            },
            {
                ...Vue3,
                id: "sign-up-form-builder",
                alt: "Sign up form",
                height: 992,
                width: 1923,
            },
            {
                ...Vue4,
                id: "submissions-form-builder",
                alt: "Submissions",
                height: 992,
                width: 1923,
            },
            {
                ...Vue5,
                id: "submit-form-builder",
                alt: "Submit",
                height: 992,
                width: 1923,
            },
            {
                ...Vue6,
                id: "profile-editing-form-builder",
                alt: "Profile editing",
                height: 992,
                width: 1923,
            },
            {
                ...Vue7,
                id: "profile-editing-dark-form-builder",
                alt: "Dark mode",
                height: 992,
                width: 1923,
            },
            {
                ...Vue8,
                id: "profile-editing-single-choice-form-builder",
                alt: "Single choice answer breakdown",
                height: 992,
                width: 1923,
            },
            {
                ...Vue9,
                id: "profile-editing-multiple-choice-form-builder",
                alt: "Multiple choice answer breakdown",
                height: 992,
                width: 1923,
            },
        ],
        stack: (
            <>
                <CaptionedIcon icon={<SiVuedotjs size={36} />} caption="Vue" />
                <CaptionedIcon icon={<SiPrimevue size={36} />} caption="PrimeVue" />
                <CaptionedIcon icon={<SiSupabase size={36} />} caption="Supabase" />
            </>
        ),
    },
    {
        title: "Search palette",
        description: "A simple, composable, responsive and dependency-free search palette component built with React",
        url: "https://github.com/thewhitehaven04/command-palette",
        demoUrl: "https://github.com/thewhitehaven04/command-palette",
        images: [],
        stack: (
            <>
                <CaptionedIcon icon={<SiReact size={36} />} caption="React" />
                <CaptionedIcon icon={<SiCssmodules size={36} />} caption="CSS Modules" />
            </>
        ),
    },
]
