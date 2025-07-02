"use client"
import { useEffect } from "react"

const Bootstrap = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    },[])
    return null;
}

export default Bootstrap;
