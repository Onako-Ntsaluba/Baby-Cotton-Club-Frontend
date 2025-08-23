import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock data for frontend-only use
    const mockOrders = [
      {
        orderId: 1,
        orderDate: "2025-08-10",
        totalAmount: 250.0,
        customer: { firstName: "Alice", lastName: "Smith" },
        status: "Shipped"
      },
      {
        orderId: 2,
        orderDate: "2025-08-11",
        totalAmount: 300.0,
        customer: { firstName: "Bob", lastName: "Johnson" },
        status: "Processing"
      },
      {
        orderId: 3,
        orderDate: "2025-08-12",
        totalAmount: 150.0,
        customer: { firstName: "Carol", lastName: "Williams" },
        status: "Delivered"
      }
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td><Link to={`/orders/${order.orderId}`}>{order.orderId}</Link></td>
              <td>{order.orderDate}</td>
              <td>{order.customer.firstName} {order.customer.lastName}</td>
              <td>{order.status}</td>
              <td>{order.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
