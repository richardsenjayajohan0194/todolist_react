import Navbar from "./Navbar";

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }:Props) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    );


}

export default MainLayout;