import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import NavbarComponent from "../Components/Navbar";
import Footer from "../Components/Footer";

const AdminLayout = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="content flex-grow-1 p-3" style={{ overflowY: "auto" }}>
          <Outlet /> {/* يعرض الصفحات الفرعية مثل الداشبورد وإدارة المستخدمين */}
        </div>
      </div>
      <Footer style={{ width: "100vw" }} />
    </div>
  );
};

export default AdminLayout;