import { useState, useEffect } from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { FaCog } from 'react-icons/fa';
import '../Styles/ManageProductsTable.css';

const ManageProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div className="products-container">
      <Table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? 'highlighted-row' : ''}>
              <td>#{product.id}</td>
              <td><img src={product.image} alt={product.name} className="product-image" /></td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="action-button">
                    <FaCog />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => alert('Edit product ' + product.id)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(product.id)}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProductsTable;
