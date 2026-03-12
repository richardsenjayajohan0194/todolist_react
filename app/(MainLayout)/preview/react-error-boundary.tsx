import { TableRow, TableCell } from "@/components/ui/table";

interface Props{
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }:Props) {
  console.log("Error Boundary Fallback Component Rendered:", error);
  return (
    <TableRow>
      <TableCell colSpan={5} className="tw-text-center">
        <div className="tw-p-4 tw-bg-red-100 tw-text-red-700 tw-rounded h-full tw-min-h-[30vh]  tw-max-h-[70vh] tw-justify-center tw-items-center tw-flex tw-flex-col ">
          <p>Something went wrong:</p>
          <pre className="tw-p-5" style={{ color: "red" }}>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default ErrorFallback;