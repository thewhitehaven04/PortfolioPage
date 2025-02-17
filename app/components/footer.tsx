"use client"

import React from "react"
const YEAR = new Date().getFullYear()

export default function Footer() {
    return (
        <small className="flex mt-2 flex-col items-center text-[#1C1C1C] dark:text-[#D4D4D4]">
            <time>© {YEAR}</time>{" "}
        </small>
    )
}
