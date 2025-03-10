import React, { useEffect, useState } from 'react';
import api from './api';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('orders');
  const [form, setForm] = useState({
    orders:'',users:'',delivery:'',shopOwners:'',currentOrder:'',showModal:''
  });
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [shopOwners, setShopOwners] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  //const form=[{orders:'',users:'',delivery:'',shopOwners:'',showModal:'',currentOrder:''}]

  useEffect(() => {
    if (activeSection === 'orders') fetchOrders();
    if (activeSection === 'users') fetchUsers();
    if (activeSection === 'delivery') fetchDelivery();
    if (activeSection === 'shopowners') fetchShopOwners();
  }, [activeSection]);

  const fetchOrders = async () => {
    try {
      console.log('Fetching orders from:', api.defaults.baseURL + '/orders');
      const response = await api.get('/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  

  const fetchUsers = async () => {
    try {
      console.log('Fetching users from:', api.defaults.baseURL + '/users');
      const response = await api.get('/users'); // Match backend route
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching Users:', error.response ? error.response.data : error.message);
    }
  };
  

  const fetchDelivery = async () => {
    try {
      const response = await api.get('/delivery');
      console.log('Delivery API Response:', response.data);
      setDelivery(response.data);
    } catch (error) {
      console.error('Error fetching delivery personnel:', error);
    }
  };

  const fetchShopOwners = async () => {
    try {
      const response = await api.get('/shop');
      console.log('Fetching URL:', api.defaults.baseURL + '/shop');
      setShopOwners(response.data);
    } catch (error) {
      console.error('Error fetching shop owners:', error);
    }
  };
  const handleUpdateOrder = (order) => {
    setCurrentOrder(order);
    setShowModal(true);
  };

  const handleDeleteOrder = async (ordersId) => {
    try {
      if (window.confirm('Are you sure you want to delete this order?')) {
        const response= await api.delete(`/orders/${ordersId}`);
        console.log('Order deleted successfully:', response.data);
        alert('Order deleted successfully!');
        fetchOrders();
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  // const handleSaveOrder = async (ordersId) => {
  //   try {
  //     console.log(ordersId);
  //     await api.put(`/orders/${currentOrder.ordersId}`, currentOrder);
  //     alert('Order updated successfully!');
  //     setShowModal(false);
  //     fetchOrders();
  //   } catch (error) {
  //     console.error('Error updating order:', error);
  //   }
  // };

  const handleSaveOrder = async (ordersId) => {
    try {
      const payload = {
        status: currentOrder.status,
        totalAmount: currentOrder.totalAmount,
        shopId: currentOrder.shopId, // Add other required fields
      };
  
      console.log('Updating order with payload:', payload);
  
      const response = await axios.put(
        `http://localhost:5161/api/Orders/${ordersId}`,
        payload
      );
  
      console.log('Order updated:', response.data);
      setShowModal(false);
      fetchOrders(); // Refresh the list
    } catch (error) {
      console.error('Error saving order:', error.response?.data || error.message);
    }
  };
  

  return (
    <div className="container-fluid" style={{ height: '100vh', backgroundColor: '#ffffff' }}>
      <div className="row h-100">
        {/* Sidebar */}
        <aside className="col-2 bg-dark text-white py-3">
          <h4 className="text-center mb-4" style={{ color: 'orange' }}>Admin Control</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button
                className={`nav-link btn ${activeSection === 'orders' ? 'btn-orange' : 'btn-dark'} text-white w-100`}
                onClick={() => setActiveSection('orders')}
              >
                Orders
              </button>
            </li>
            <li className="nav-item mt-2">
              <button
                className={`nav-link btn ${activeSection === 'users' ? 'btn-orange' : 'btn-dark'} text-white w-100`}
                onClick={() => setActiveSection('users')}
              >
                Users
              </button>
            </li>
            <li className="nav-item mt-2">
              <button
                className={`nav-link btn ${activeSection === 'delivery' ? 'btn-orange' : 'btn-dark'} text-white w-100`}
                onClick={() => setActiveSection('delivery')}
              >
                Delivery
              </button>
            </li>
            <li className="nav-item mt-2">
              <button
                className={`nav-link btn ${activeSection === 'shopowners' ? 'btn-orange' : 'btn-dark'} text-white w-100`}
                onClick={() => setActiveSection('shopowners')}
              >
                Shop Owners
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="col-10 py-4">
          <h1 className="text-center mb-5" style={{ color: 'orange' }}>Admin Dashboard</h1>
          {activeSection === 'orders' && (
            <section>
              <h3 className="text-black">All Orders</h3>
              <table className="table table-striped">
                <thead className="bg-orange text-white">
                  <tr>
                    <th>Order ID</th>
                    <th>No. of Items</th>
                    <th>order status</th>
                    <th>Amount</th>
                    <th>ShopId</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.ordersId}>
                      <td>{order.ordersId}</td>
                      {/* <td>{order.TotalAmount}</td> */}
                      <td>{order.userId}</td>
                      <td>{order.status}</td>
                      <td>{order.totalAmount}</td>
                      <td>{order.shopId}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => handleUpdateOrder(order.ordersId)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteOrder(order.ordersId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* Modal for Updating Order */}
          {showModal && (
            <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Update Order</h5>
                    <button className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input
                          type="text"
                          className="form-control"
                          id="status"
                          value={currentOrder.status}
                          onChange={(e) =>
                            setCurrentOrder({ ...currentOrder, status: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          id="amount"
                          value={currentOrder.totalAmount}
                          onChange={(e) =>
                            setCurrentOrder({ ...currentOrder, totalAmount: e.target.value })
                          }
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleSaveOrder}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
                </tbody>
              </table>
            </section>
          )}
          {activeSection === 'users' && (
            <section>
              <h3 className="text-black">All Customers</h3>
              <table className="table table-striped">
                <thead className="bg-orange text-white">
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((users) => (
                    <tr key={users.userId}>
                      {/* <td>{users.userId}</td> */}
                      <td>{users.name}</td>
                      <td>{users.phonenumber}</td>
                      <td>{users.address}</td>
                      <td>{users.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
          {activeSection === 'delivery' && (
            <section>
              <h3 className="text-black">All Delivery Personnel</h3>
              <table className="table table-striped">
                <thead className="bg-orange text-white">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {delivery.map((person, index) => (
                    <tr key={index}>
                      <td>{person.deliveryId || 'N/A'}</td>
                      <td>{person.deliveryPersonName || 'N/A'}</td>
                      <td>{person.deliveryPersonPhone || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </section>
          )}
          {activeSection === 'shopowners' && (
            <section>
              <h3 className="text-black">All Shop Owners</h3>
              <table className="table table-striped">
                <thead className="bg-orange text-white">
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Shop Id</th>
                    <th>Shop Name</th>
                    <th>Status</th>
                    {/* <th>Contact</th> */}
                  </tr>
                </thead>
                <tbody>
                  {shopOwners.map((owner) => (
                    <tr key={owner.ShopId}>
                      <td>{owner.shopId}</td>
                      <td>{owner.shopName}</td>
                      <td>{owner.status}</td>
                      {/* <td>{owner.UserId}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
