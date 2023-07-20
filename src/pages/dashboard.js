import DashboardLayout from "../../components/Layout/DashboardLayout";

const Dashboard = () => {
    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };
  