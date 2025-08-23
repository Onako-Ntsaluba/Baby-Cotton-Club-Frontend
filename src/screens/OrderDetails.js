import React from "react";
import { useParams, Link } from "react-router-dom";

// Mock data for demonstration
const mockOrders = [
  {
    orderId: 1,
    orderDate: "2025-08-10",
    totalAmount: 250.0,
    customer: { firstName: "Alice", lastName: "Smith" },
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
    customer: { firstName: "Bob", lastName: "Johnson" },
    status: "Processing",
    orderLines: [
      { orderLineId: 3, productName: "Baby Hat", productSKU: "BH-003", quantity: 1, price: 20.0 }
    ]
  }
];

function OrderDetails() {
  const { orderId } = useParams();
  const order = mockOrders.find(o => o.orderId === Number(orderId));

  if (!order) return <div>Order not found.</div>;

  return (
    <div>
      <h2>Order Details</h2>
      <p><b>Order ID:</b> {order.orderId}</p>
      <p><b>Date:</b> {order.orderDate}</p>
      <p><b>Customer:</b> {order.customer.firstName} {order.customer.lastName}</p>
      <p><b>Status:</b> {order.status}</p>
      <p><b>Total Amount:</b> ${order.totalAmount.toFixed(2)}</p>
      <h3>Order Lines</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price ($)</th>
            <th>Subtotal ($)</th>
          </tr>
        </thead>
        <tbody>
          {order.orderLines.map(line => (
            <tr key={line.orderLineId}>
              <td>{line.productName}</td>
              <td>{line.productSKU}</td>
              <td>{line.quantity}</td>
              <td>{line.price.toFixed(2)}</td>
              <td>{(line.price * line.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/orders">Back to Orders</Link>
    </div>
  );
}

export default OrderDetails;
