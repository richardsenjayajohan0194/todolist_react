"use client";

import axios from "axios";
import { ToDoList } from "./columns";
// If 'columns' is exported from './columns', import it from there:
// import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DataTable from "./data-table";

const Preview = () => {
  console.log("Preview Page has been render");
  // const rowPerPage = 10;
  const [data, setData] = useState<ToDoList[]>([]);
  const [loading, setLoading] = useState(true);
  // const [startIndex, setStartIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(rowPerPage);

  useEffect(() => {
    
    async function fetchData() {
      try {
        const response = await axios.get<ToDoList[]>(
          "http://localhost:3001/preview",
          { withCredentials: true }
        );
        const res = await response.data;
        console.log("Response Data: ", res);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
        const toastId = toast.loading("Loading...");  
        if (axios.isAxiosError(error)) {
          console.log("Axios error:", error.message);
          toast.update(toastId, {
            render: error.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        } else {
          console.log("Unexpected error:", error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  },[]);
  

  console.log("Datanya adalah: ", typeof data);

  if (loading) return <div className="vh-100 d-flex justify-content-center align-items-center p-2">Loading...</div>

  return (
    <div className="tw-container tw-mx-auto tw-py-10">
      <DataTable data={data}/>
      <ToastContainer />
    </div>
  );
};

export default Preview;
