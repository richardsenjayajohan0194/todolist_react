"use client"
import { fetchToDos } from '@/app/components/dashboard/ServerFetch';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { createContext, useState } from 'react'
import type { ToDoListResponse } from './columns';

interface Props{
    children?: React.ReactNode;
}

interface SelectedItemsContextType {
  changeMaxPerPage: (newMax: number, page?: number) => { limit: number; page: number };
  maxPerPage: { limit: number; page?: number };
  todos?: ToDoListResponse['getToDoList'];
  // totalCount?: ToDoListResponse['totalCountData'];
  totalPages?: number;
  status: "error" | "success" | "pending";
  isError: boolean;
  error: Error | null;
  refetch: UseQueryResult<ToDoListResponse | undefined>['refetch'];
}

export const SelectedItemsContext = createContext<SelectedItemsContextType | null>(null);

function SelectedItemsPageProvider({children}: Props) {
  const [maxPerPage, setMaxPerPage] = useState({limit: 5, page: 1}); // Default to 5; can be 5, 10, or 15
  
  const {data: todos, status, isError, error, refetch} = useQuery({
    queryKey: ['todos', maxPerPage], 
    queryFn: () => fetchToDos(maxPerPage),
    //!reduce unnecessary retries fetching data
    gcTime: 3000,
    staleTime: 6000,
    refetchOnWindowFocus: false,
    retry: false,
    // placeholderData: (previousData) => previousData,
    
  });

  const changeMaxPerPage = (newMax: number, page?: number) => {
    if([5, 10].includes(newMax)){
        setMaxPerPage({limit: newMax, page: page ?? 1});
        console.log("Max per page changed to:", newMax);
    }
    return maxPerPage;
  }

  console.log("Todos in Provider:", typeof todos);

  const value = {
    changeMaxPerPage,
    maxPerPage,
    todos: todos?.getToDoList,
    // totalCount: todos?.totalCountData,
    totalPages: Math.ceil((todos?.totalCountData || 0) / maxPerPage.limit) ,
    status,
    isError,
    error,
    refetch
  };
  console.log("SelectedItemsPageProvider Rendered with value:", value);

  return (
    <SelectedItemsContext.Provider value={value}>
        {children}
    </SelectedItemsContext.Provider>
  )
}

export default SelectedItemsPageProvider