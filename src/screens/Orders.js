// Currency formatter for ZAR
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  }).format(amount);
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Orders({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock data for frontend-only use, now with email
    const mockOrders = [
      {
        orderId: 1,
        orderDate: "2025-08-10",
        totalAmount: 250.0,
        customer: { firstName: "Alice", lastName: "Smith", email: "alice@email.com" },
        status: "Shipped"
      },
      {
        orderId: 2,
        orderDate: "2025-08-11",
        totalAmount: 300.0,
        customer: { firstName: "Bob", lastName: "Johnson", email: "bob@email.com" },
        status: "Processing"
      },
      {
        orderId: 3,
        orderDate: "2025-08-12",
        totalAmount: 150.0,
        customer: { firstName: "Carol", lastName: "Williams", email: "carol@email.com" },
        status: "Delivered"
      }
    ];
    setOrders(mockOrders);
  }, []);

  if (!user) {
    return <div className="orders-empty">Please <Link to="/login">log in</Link> to view your orders.</div>;
  }

  const userOrders = orders.filter(order => order.customer.email === user.email);

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>
      {userOrders.length === 0 ? (
        <div className="orders-empty">You have no orders yet.</div>
      ) : (
        <div className="orders-list">
          {userOrders.map(order => (
            <div className="order-card" key={order.orderId}>
              <div className="order-card-header">
                <span className="order-id">Order #{order.orderId}</span>
                <span className="order-status">{order.status}</span>
              </div>
              <div className="order-card-body">
                <div><b>Date:</b> {order.orderDate}</div>
                <div><b>Total:</b> {formatCurrency(order.totalAmount)}</div>
                <Link to={`/orders/${order.orderId}`} className="order-details-link">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
