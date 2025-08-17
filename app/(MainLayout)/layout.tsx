
import UserInfo from "../components/dashboard/UserInfo";
import Navbar from "../components/dashboard/Navbar";


interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }:Props) => {
    console.log("MainLayout rendered");
    return (
        <>
            <UserInfo>
            <Navbar />
            {children}
            </UserInfo>
        </>
    );


}

export default Layout;
