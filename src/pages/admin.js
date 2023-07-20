import DashboardLayout from "@/components/Layout/DashboardLayout";
import RootLayout from "@/components/Layout/RootLayout";

const Admin = () => {
  return <div>Admin</div>;
}; 

export default Admin;

Admin.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </RootLayout>
  );
};
