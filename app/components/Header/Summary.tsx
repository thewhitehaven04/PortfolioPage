export const Summary = () => (
    <section className="flex flex-col pl-[80px]">
        <div className="grid grid-cols-[1px,64px,_1fr]">
            <div className="h-8 border-2 border-primary rounded-sm" />
            <div className="border-b-4 border-l-4 border-primary w-16 h-8 skew-x-[45deg] translate-x-4 rounded-b-sm" />
            <div className="border-b-4 w-full border-primary" />
        </div>
        <p className="block font-xl border-4 border-t-0 rounded-b-xl p-4 border-primary">
            Hello there! I'm a front-end engineer fascinated with inner workings of the web, browsers, JavaScript and
            library internals. Commited to delivering high-quality web applications. Experienced in international team
            collaboration and fluent in English, I leverage my extensive quality assurance background to bridge
            development and testing communication. I use my hobby project, an F1 statistics and telemetry visualization
            application, to hone my skills in both front-end and back-end development.
        </p>
    </section>
)
