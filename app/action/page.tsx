import AddContent from "../components/global/AddContent";
import MainLayout from "../components/dashboard/MainLayout";


export default function Action() {
  return (
    <>
    <MainLayout>
      <AddContent /> {/* Correctly closed the AddContent component */}
    </MainLayout>
    </>
  );
}