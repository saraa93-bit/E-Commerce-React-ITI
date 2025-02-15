import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import NavbarComponent from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import Email from './Pages/Email';
import Calendar from './Pages/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Style.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        {/* Navbar في الأعلى */}
        <NavbarComponent />

        {/* Sidebar والمحتوى الرئيسي */}
        <div className="d-flex flex-grow-1">
          <Sidebar /> {/* Sidebar على الجانب الأيسر */}

          {/* المحتوى الرئيسي */}
          <div className="content flex-grow-1 p-3" style={{ overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/email" element={<Email />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </div>

        {/* Footer في الأسفل */}
        <Footer style={{ width: '100vw' }} />
      </div>
    </Router>
  );
}

export default App;