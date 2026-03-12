

import HeaderForm from "@/app/components/global/HeaderForm";
// import  { UseUserSession }  from "@/app/components/global/UseUserSession";
import { getServerSession } from "next-auth";
import 'react-loading-skeleton/dist/skeleton.css'; 

const Dashboard = async () => {
  const session = await getServerSession();
   // const { isLoading, userName, isAuthenticated } = UseUserSession();
 
   console.log("Dashboard rerender");
 
   // Now render with real data—no double render!
   return (
    <>
      {/* <div className="add-content bg-success vh-100 p-2">
        <div className="d-flex justify-content-center align-items-center col">
          
        </div>
      </div> */}
      <div className="tw-p-5">
        <HeaderForm tag_header="h1" className="tw-text-4xl tw-font-bold" header={`Todo List App`}/>
        <HeaderForm tag_header="h5"  className="tw-text-xl" header={`Welcome, ${session?.user.name}`}/>
      </div>
     </>
   );
};

export default Dashboard;
