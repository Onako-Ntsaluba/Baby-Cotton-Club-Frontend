import React from "react";
import { useParams, Link } from "react-router-dom";

// Mock data for demonstration
const mockOrders = [
  {
    orderId: 1,
    orderDate: "2025-08-10",
    totalAmount: 250.0,
    customer: { firstName: "Alice", lastName: "Smith", email: "alice@email.com" },
    status: "Shipped",
    orderLines: [
      { orderLineId: 1, productName: "Baby Blanket", productSKU: "BB-001", quantity: 2, price: 50.0 },
      { orderLineId: 2, productName: "Cotton Onesie", productSKU: "CO-002", quantity: 3, price: 30.0 }
    ]
  },
  {
    orderId: 2,
    orderDate: "2025-08-11",
    totalAmount: 300.0,
    customer: { firstName: "Bob", lastName: "Johnson", email: "bob@email.com" },
    status: "Processing",
    orderLines: [
      { orderLineId: 3, productName: "Baby Hat", productSKU: "BH-003", quantity: 1, price: 20.0 }
    ]
  },
  {
    orderId: 3,
    orderDate: "2025-08-12",
    totalAmount: 150.0,
    customer: { firstName: "Carol", lastName: "Williams", email: "carol@email.com" },
    status: "Delivered",
    orderLines: []
  }
];

// Currency formatter for ZAR
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  }).format(amount);

function OrderDetails({ user }) {
  const { orderId } = useParams();
  const order = mockOrders.find(o => o.orderId === Number(orderId));

  if (!user) {
    return (
      <div className="orders-empty">
        Please <Link to="/login">log in</Link> to view order details.
      </div>
    );
  }

  if (!order) return <div className="orders-empty">Order not found.</div>;

  if (order.customer.email !== user.email) {
    return <div className="orders-empty">You are not authorized to view this order.</div>;
  }

  return (
    <div className="order-details-page">
      <h2 className="orders-title">Order Details</h2>

      <div className="order-details-card">
        <div><b>Order ID:</b> {order.orderId}</div>
        <div><b>Date:</b> {order.orderDate}</div>
        <div><b>Status:</b> <span className="order-status">{order.status}</span></div>
        <div><b>Total Amount:</b> {formatCurrency(order.totalAmount)}</div>
      </div>

      <h3 style={{ marginTop: "2rem" }}>Order Items</h3>

      {order.orderLines.length === 0 ? (
        <div className="orders-empty">No items in this order.</div>
      ) : (
        <table className="order-details-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.orderLines.map(line => (
              <tr key={line.orderLineId}>
                <td>{line.productName}</td>
                <td>{line.productSKU}</td>
                <td>{line.quantity}</td>
                <td>{formatCurrency(line.price)}</td>
                <td>{formatCurrency(line.price * line.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderDetails;
