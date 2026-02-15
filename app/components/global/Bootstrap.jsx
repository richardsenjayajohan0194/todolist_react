"use client"
import { useEffect } from "react"


const Bootstrap = () => {
    console.log("Bootstrap component loaded");
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    },[])
    return null;
}

export default Bootstrap;
