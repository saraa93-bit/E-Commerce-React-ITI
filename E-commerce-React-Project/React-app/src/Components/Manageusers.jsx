import { useState, useEffect } from 'react';
import { Table, Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import '../Styles/ManageUsersTable.css';

const ManageUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (userToDelete) {
      try {
        await axios.delete(`http://localhost:3000/users/${userToDelete}`);
        setUsers(users.filter(user => user.id !== userToDelete));
        setShowModal(false);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="users-container">
      <div className="main-content">
        <Form.Control
          type="text"
          placeholder="Search for a user..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-3 search-input"
        />
        <Table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'highlighted-row' : ''}>
                  <td>#{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" className="action-button">
                        <FaCog />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => alert('Edit product ' + user.id)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteClick(user.id)}>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No results found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageUsersTable;