import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <Nav className="flex-column bg-dark sidebar">
      <Nav.Link href="/" className="sidebar-link">
        Dashboard
      </Nav.Link>
      <Nav.Link href="/email" className="sidebar-link">
        Email
      </Nav.Link>
      <Nav.Link href="/calendar" className="sidebar-link">
        Calendar
      </Nav.Link>
      <Nav.Link href="/chat" className="sidebar-link">
        Chat
      </Nav.Link>
      <Nav.Link href="/charts" className="sidebar-link">
        Charts
      </Nav.Link>
      <Nav.Link href="/forms" className="sidebar-link">
        Forms
      </Nav.Link>
      <Nav.Link href="/ui-elements" className="sidebar-link">
        UI Elements
      </Nav.Link>
      <Nav.Link href="/tables" className="sidebar-link">
        Tables
      </Nav.Link>
      <Nav.Link href="/maps" className="sidebar-link">
        Maps
      </Nav.Link>
      <Nav.Link href="/pages" className="sidebar-link">
        Pages
      </Nav.Link>
      <Nav.Link href="/multiple-levels" className="sidebar-link">
        Multiple Levels
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;