import axios from 'axios';
import { toast } from 'react-toastify';


const UseToastAxios = async (apiUrl: string, data: object) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await axios.post(
      apiUrl,
      { data: data },
      { withCredentials: true }
    );
    const res = await response.data.message;
    console.log("Response from server:", res);
    toast.update(toastId, {
      render: res,
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error) {
    console.log("Error posting data:", error);
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
  }

}

export default UseToastAxios;
