import { Nav } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { LiaMapSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { TbBrandProducthunt } from "react-icons/tb";
import { FaFirstOrderAlt } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Nav className="flex-column bg-light sidebar">
    <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <GoHome className="text-danger m-2 fs-4" />
      Dashboard
    </NavLink>
    <NavLink to="/ManageUsers" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <FaUserGroup className="text-danger m-2 fs-4" />
      Users
    </NavLink>
    <NavLink to="/ManageProductsTable" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <TbBrandProducthunt className="text-danger m-2 fs-4" />
      Products
    </NavLink>
    <NavLink to="/ManageOrders" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <FaFirstOrderAlt className="text-danger m-2 fs-4" />
      Orders
    </NavLink>
    <NavLink to="/calendar" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <SlCalender className="text-danger m-2 fs-4" />
      Calendar
    </NavLink>
      <NavLink to="/chat" className="sidebar-link">
        <IoChatbubbleEllipsesOutline className="text-danger m-2 fs-4" />
        Chat
      </NavLink>
      <NavLink to="/charts" className="sidebar-link">
        <IoStatsChart className="text-danger m-2 fs-4" />
        Charts
      </NavLink>
      <NavLink to="/forms" className="sidebar-link">
        <FaPencil className="text-danger m-2 fs-4" />
        Forms
      </NavLink>
      <NavLink to="/maps" className="sidebar-link">
        <LiaMapSolid className="text-danger m-2 fs-4" />
        Maps
      </NavLink>
      <NavLink to="/multiple-levels" className="sidebar-link">
        <SiLevelsdotfyi className="text-danger m-2 fs-4" />
        Multiple Levels
      </NavLink>
    </Nav>
  );
}
export default Sidebar;
