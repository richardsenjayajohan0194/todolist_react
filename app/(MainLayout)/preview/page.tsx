// import { ToastContainer } from "react-toastify";
// import DataTable from "./data-table";

// import { fetchToDos } from "@/app/components/dashboard/ServerFetch";
// import ToastServer from "@/app/components/main_layout/ToastServer";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import DataTableWrapper from "./data-table-wrapper";
// import getQueryClient from "@/utils/getQueryClient";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MaxPageFilter from "./MaxPageFilter";
import SelectedItemsPageProvider from "./SelectedItemsPageProvider";
import PageController from "./PageController";
// Make sure that PageController is a React component that returns JSX.
// import getQueryClient from "@/utils/getQueryClient";

const Preview = async () => {
  console.log("Preview Page has been render");

  // const data = await getServerSideProps();
  // console.log("res data: ", data);

  // const queryClient =  getQueryClient();
  // const data= await queryClient.prefetchQuery({queryKey: ['todos'],queryFn: fetchToDos});
  // console.log("data await: ",data);
  // const dehydratedState = dehydrate(queryClient);
  // console.log("Dehydrated State: ",dehydratedState);
  
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-flex-grow tw-my-20">
      <div className="tw-container tw-mx-auto tw-py-2 tw-bg-white border rounded-3 shadow-lgt tw-min-h-max-[75vh]">
        {/* <HydrationBoundary state={dehydratedState}> */}
        <SelectedItemsPageProvider>
          <div className="d-flex flex-column justify-content-end tw-pl-2 tw-pr-2">
            <MaxPageFilter/>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <DataTableWrapper/>
          </Table>
          <PageController/>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* </HydrationBoundary> */}
          </SelectedItemsPageProvider>
      </div>
    </div>
    
  );
};

export default Preview;
