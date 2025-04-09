import axios from "axios";

// Create a debounced function
const search = async (reqData: string, setMassage: React.Dispatch<React.SetStateAction<string>>, api: string) => {
  if (reqData) {
    try {
      const response = await axios.post(
        api,
        { username: reqData },
        { withCredentials: true }
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.log("Error posting data:", error);
      if (axios.isAxiosError(error)) {
        console.log("Axios error live:", error.response?.data);
        setMassage(error.response?.data); // Set the error message
      } else {
        console.error("Unexpected error live:", error);
      }
    }
  }
  console.log(reqData);
};

export default search;