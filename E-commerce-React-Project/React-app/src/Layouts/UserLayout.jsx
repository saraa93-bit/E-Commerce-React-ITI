// UserLayout.js
import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/Navbar";
import Footer from "../Components/Footer";

const UserLayout = () => {
  return (
    <div>
      <NavbarComponent />
      
      {/* هنا يمكنك إضافة أي عناصر مشتركة لواجهة المستخدم العادي */}
      <Outlet /> {/* يعرض الصفحات الفرعية مثل الهوم والريجستر */}
      <Footer />
    </div>
  );
};

export default UserLayout;