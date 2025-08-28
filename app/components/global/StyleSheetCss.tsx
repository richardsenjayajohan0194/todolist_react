'use client'
import Link from "next/link"

const StyleSheetCss = () => {
    console.log("StyleSheetCss loaded");
    return (
        <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-notify/dist/simple-notify.css"></Link>
    )
}
export default StyleSheetCss