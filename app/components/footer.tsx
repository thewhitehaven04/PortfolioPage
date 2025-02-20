"use client"

import React from "react"
const YEAR = new Date().getFullYear()

export default function Footer() {
    return (
        <small className="flex mt-2 flex-col items-center text-primary-content dark:text-primary">
            <time>© {YEAR}</time>{" "}
        </small>
    )
}
