"use client"
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

interface Props{
    message: string;
}

export default function ToastServer({message}:Props) {
  console.log("rendering server toast on client");
  useEffect(() => {
    const toastId = toast.loading("Loading...");
    if(message){
         toast.update(toastId, {
          render: message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
    }
  },[message])
  
  return (
     <ToastContainer />
  )
}
