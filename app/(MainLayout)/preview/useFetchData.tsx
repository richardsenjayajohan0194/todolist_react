//!not yet used
import { useState, useEffect, useMemo, useCallback } from "react";
import { ToDoList } from "./columns";
import axios from "axios";
import { toast } from "react-toastify";

export default function useFetchData() {
  const [data, setData] = useState<ToDoList[]>([]);
  const [loading, setLoading] = useState(true);

  // Memoize the fetch function so it doesn't recreate on every render
  const fetchData = useCallback(async () => {
    const toastId = toast.loading("Loading...");

    try {
      setLoading(true);
      const response = await axios.get<ToDoList[]>(
        "http://localhost:3001/preview",
        { withCredentials: true }
      );
      const res = response.data;
      console.log("Response Data: ", res);
      setData(res);
      toast.update(toastId!, {
        render: "Data loaded successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      
    } catch (err) {
      console.error("Error fetching data:", err);
      const errorMessage = axios.isAxiosError(err)
        ? err.message
        : "An unexpected error occurred";
      toast.update(toastId!, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      
    } finally {
      setLoading(false);
    }
  }, []); // Empty deps: function logic doesn't depend on external values

  useEffect(() => {
    fetchData(); // Initial fetch on mount
  }, [fetchData]); // Depend on the memoized fetchData

  // Memoize the returned object to stabilize its reference
  return useMemo(
    () => ({ data, loading, refetch: fetchData }),
    [data, loading, fetchData]
  );
}
