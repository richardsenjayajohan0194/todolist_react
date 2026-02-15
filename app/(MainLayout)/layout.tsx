// "use client"
// import Authpage from "../authpage/page";

// import dynamic from 'next/dynamic';  // Import dynamic for lazy loading
import UserInfo from "../components/dashboard/UserInfo";
import Navbar from '../components/dashboard/Navbar';
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from '../api/auth/[...nextauth]/authOption';
// import axios from 'axios';

// import AddContent from "../components/global/AddContent";

// Lazy-load Navbar with a loading fallback
// const LazyNavbar = dynamic(() => import('../components/dashboard/Navbar'), {
//   loading: () => <p>Loading Navbar...</p>,  // Custom fallback (e.g., spinner or text)
//   ssr: false,  // Optional: Disable SSR if Navbar needs client-only features (e.g., browser APIs)
// });

interface Props {
    children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
    console.log("MainLayout rendered");
    // const session = await getServerSession(authOptions);
    // console.log("Session user", session?.user);
    // if(!session?.user?.id) redirect("/login");

    // const id = session.user.id;
    // try {
    //    const url = `http://localhost:3000/api/getuser/${id}`;
    //    const response = await axios.get(url);
    //    const data = response.data;
    //    console.log(data);
    
    // } catch (error){
    //    throw console.log(error);
    // }
    
    return (
        <div className="layout-content bg-success vh-100 d-flex flex-column">
            <UserInfo>
                {/* <LazyNavbar />  Use LazyNavbar instead of Navbar */}
                <Navbar/>
                {children}
            </UserInfo>
        </div>
    );
};

export default Layout;