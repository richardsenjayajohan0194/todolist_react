'use client'
import Script from "next/script";

interface Props {
  strategy?: "afterInteractive" | "beforeInteractive" | "lazyOnload";
  src: string;
}

const ScriptBundle = ({strategy, src}:Props) => {

  return (
    <>
      <Script strategy={strategy} 
      onLoad={() => {
        console.log("Simple Notify JS loaded");
      }}
      onReady={() => {
        console.log("Simple Notify JS is ready");
      }}
      onError={(e) => {
        console.log("Error loading Simple Notify JS", e);
      }}
      src={src}></Script>
    </>
  );
}
  
export default ScriptBundle;