import { ImageResponse } from "next/og"
import Profile from "public/profile.png"
import Image from "next/image"

export function GET(request: Request) {
    return new ImageResponse(
        <div className="avatar col-start-1 p-3 row-start-1 row-span-3 items-center justify-center">
            <div className="ring-4 ring-primary ring-offset-8 ring-offset-base-100 rounded-full">
                <Image src={Profile} alt="Profile" height={512} width={512} />
            </div>
        </div>,
        {
            width: 512,
            height: 512,
        },
    )
}
