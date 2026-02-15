"use client"
import { lazy } from "react";
// import DataTableComponent from "./data-table-component";
// import { ErrorBoundary } from "react-error-boundary";
// import LazyLoadSkeleton from "./data-table-skeleton-load-wrapper";  // Import normally, not lazily
// import ErrorFallback from "./react-error-boundary";
// import { useQueryErrorResetBoundary } from "@tanstack/react-query";
// import DataTable from "./data-table";

// interface Props{
//   children: React.ReactNode;
// }

const DataTable = lazy(async () => await import("./data-table"));

function DataTableWrapper() {
  console.log("DataTableWrapper Rendered");
  // const { reset } = useQueryErrorResetBoundary();
  return (
    // <Suspense fallback={<LazyLoadSkeleton/>}>
    //   <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
        <DataTable/>
    // </ErrorBoundary>
    // </Suspense>
  );
}

export default DataTableWrapper;