"use client"
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

interface Props{
    message: string;
}

export default function ToastProvider({message}:Props) {

  useEffect(() => {
    const toastId = toast.loading("Loading...");
    if(message){
         toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
    }
  },[message])
  
  return (
     <ToastContainer />
  )
}
