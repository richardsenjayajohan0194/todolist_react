
import Navbar from "../components/dashboard/Navbar";
import UserInfo from "../components/dashboard/UserInfo";

// import AddContent from "../components/global/AddContent";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }:Props) => {
    console.log("MainLayout rendered");
    
    return (
        <>
            <UserInfo>
            <Navbar/>
            {children}
            </UserInfo>
        </>
    );


}

export default Layout;
