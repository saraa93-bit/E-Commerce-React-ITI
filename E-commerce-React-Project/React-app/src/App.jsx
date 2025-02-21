import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Email from "./Pages/Email";
import Calendar from "./Pages/Calendar";
import Cards from "./Components/Cards";
import Charts from "./Components/Charts";
import ManageUsersTable from "./Components/ManageUsers";
import ManageProductsTable from "./Components/ManageProductsTable";
import ManageOrdersTable from "./Components/ManageOrders";
import ProductPage from "./Pages/ProductPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Style.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* واجهة المستخدم العادي */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/product" element={<ProductPage />} />
        </Route>

        {/* واجهة الأدمن */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email" element={<Email />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/ManageUsers" element={<ManageUsersTable />} />
          <Route path="/ManageProductsTable" element={<ManageProductsTable />} />
          <Route path="/ManageOrders" element={<ManageOrdersTable />} />
        </Route>

        {/* صفحة 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;