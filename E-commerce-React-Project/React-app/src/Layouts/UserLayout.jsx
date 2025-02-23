import { Outlet, useLocation } from "react-router-dom";
import NavbarComponent from "../Components/Navbar";
import Footer from "../Components/Footer";

const UserLayout = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      <NavbarComponent hideIcons={isAuthPage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;