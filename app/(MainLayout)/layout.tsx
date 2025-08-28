
import UserInfo from "../components/dashboard/UserInfo";
import Navbar from "../components/dashboard/Navbar";
import AddContent from "../components/global/AddContent";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }:Props) => {
    console.log("MainLayout rendered");
    
    return (
        <>
            <UserInfo>
            <Navbar />
            <AddContent/>
            {children}
            </UserInfo>
        </>
    );


}

export default Layout;
