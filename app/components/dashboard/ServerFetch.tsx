import { ToDoListResponse } from "@/app/(MainLayout)/preview/columns";
import axios from "axios";

interface Props{
  limit?: number;
  page?: number;
}

export async function fetchToDos({ limit, page }: Props) {
  console.log("Server Fetch Function...");
  try{
    const res = await axios.get<ToDoListResponse>(`http://localhost:3001/preview?limit=${limit}&page=${page}`);
    if(!res.status) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.data;
  } catch (err){
    if(axios.isAxiosError(err)){
      if (err.response) {
        // Server responded with a status code outside 2xx
        // return `Server Error:, ${err.response.status}, ${err.response.data}`
        throw new Error(`Server Error:, ${err.response.status}, ${err.response.data}`);
        // console.error('Server Error:', err.response.status, err.response.data);
      } else if (err.request) {
        // Request made but no response received (API down or network issue)
        // console.error('No Response from Server:', err.message);
        // throw `Error ${err.name} on server: Network Error`;
        throw new Error(`Error ${err.name} on server: Network Error`);
        // console.error('No Response from Server:', err.message);
        // throw err.message;
      } else {        // Something happened in setting up the request
        // console.error('Request Setup Error:', err.message);
        throw new Error(`Request Setup Error:', ${err.message}`);
        // return `Request Setup Error:', ${err.message}`;s
      }
      
    }
  }
  
}

