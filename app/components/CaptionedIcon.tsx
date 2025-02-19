export const CaptionedIcon = ({ icon, caption }: { icon: React.ReactNode; caption: string }) => (
    <div className="flex flex-col gap-2 items-center">
        {icon}
        <span>{caption}</span>
    </div>
)
