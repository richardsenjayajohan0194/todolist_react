// import ToastServer from "@/app/components/main_layout/ToastServer";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import DataTableSkeletonWrapper from "./data-table-skeleton-load-wrapper";
import ErrorFallback from "./react-error-boundary";
import { SelectedItemsContext } from "./SelectedItemsPageProvider";
import { useContext } from "react";
import DropdownMenuSelection from "./DropdownMenuSelection";

const DataTable = () => {
  console.log("Page Preview Rendering");

  const { todos, isError, error, status, refetch, maxPerPage } = useContext(SelectedItemsContext)!;
  

  console.log("Data Table:", todos, status);
  console.log("is Error:", isError);
  console.log(maxPerPage.limit);

  if (status === "pending") {
    return <DataTableSkeletonWrapper rowPerPage={maxPerPage.limit} />;
  }

  if (isError) {
    return <ErrorFallback error={error instanceof Error ? error : new Error("An error occurred")} resetErrorBoundary={() => refetch()} />;
  }

  return (
    <>
      <TableBody>
        <>
          {todos?.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.content}</TableCell>
              <TableCell>{todo.users.name}</TableCell>
              <TableCell>
                {/* Pass the current todo as data, and the onClick handler */}
                <DropdownMenuSelection  data={todo}/>
              </TableCell>
            </TableRow>
          ))}
        </>
      </TableBody>
     
    </>
  );
};

export default DataTable;