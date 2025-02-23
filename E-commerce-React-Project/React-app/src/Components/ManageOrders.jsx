import { useState, useEffect } from "react";
import { Table, Dropdown, Modal, Button } from "react-bootstrap";
import axios from "axios";
import { FaCog } from "react-icons/fa";
import "../Styles/ManageOrdersTable.css";

const ManageOrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("Fetching orders...");
        const response = await axios.get("http://localhost:3000/orders");
        console.log("Orders fetched successfully:", response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleConfirm = async (orderId) => {
    try {
      console.log("Confirming order:", orderId);
      const response = await axios.put(`http://localhost:3000/orders/${orderId}`, { status: "Confirmed" });
      console.log("Order confirmed successfully:", response.data);

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId ? { ...order, status: "Confirmed" } : order
        )
      );
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  const handleDeleteClick = (orderId) => {
    console.log("Delete button clicked for order:", orderId);
    setOrderToDelete(orderId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      console.log("Deleting order:", orderToDelete);
      const response = await axios.delete(`http://localhost:3000/orders/${orderToDelete}`);
      console.log("Order deleted successfully:", response.data);

      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.orderId !== orderToDelete)
      );

      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleDeleteCancel = () => {
    console.log("Delete action cancelled");
    setShowDeleteModal(false);
    setOrderToDelete(null);
  };

  return (
    <div className="orders-container">
      <Table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Products</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={order.orderId} className={index % 2 === 0 ? "highlighted-row" : ""}>
                <td>#{order.orderId}</td>
                <td>{order.userId}</td>
                <td>{order.username}</td>
                <td>
                  <ul>
                    {order.products.map((product) => (
                      <li key={product.productId}>
                        Product {product.productId} (x{product.quantity})
                      </li>
                    ))}
                  </ul>
                </td>
                <td>${order.totalPrice}</td>
                <td>{order.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" className="action-button">
                      <FaCog />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href={`/edit-order/${order.orderId}`}>Edit</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteClick(order.orderId)}>Delete</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleConfirm(order.orderId)}>Confirm</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this order?</Modal.Body>
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

export default ManageOrdersTable;