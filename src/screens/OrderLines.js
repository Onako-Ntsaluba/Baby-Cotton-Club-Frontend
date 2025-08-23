import React, { useEffect, useState } from "react";
// import api from "../api/api";


function OrderLines() {
  const [orderLines, setOrderLines] = useState([]);
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Mock data for frontend-only use
    const mockOrderLines = [
      {
        orderLineId: 1,
        orderId: 1,
        productName: "Baby Blanket",
        productSKU: "BB-001",
        quantity: 2,
        price: 50.0
      },
      {
        orderLineId: 2,
        orderId: 1,
        productName: "Cotton Onesie",
        productSKU: "CO-002",
        quantity: 3,
        price: 30.0
      },
      {
        orderLineId: 3,
        orderId: 2,
        productName: "Baby Hat",
        productSKU: "BH-003",
        quantity: 1,
        price: 20.0
      }
    ];
    setOrderLines(mockOrderLines);
  }, []);

  // Filtering logic
  const filteredLines = orderLines.filter(line => {
    const matchesOrder = orderIdFilter ? String(line.orderId) === orderIdFilter : true;
    const matchesSearch = search
      ? line.productName.toLowerCase().includes(search.toLowerCase()) ||
        line.productSKU.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesOrder && matchesSearch;
  });

  const total = filteredLines.reduce((sum, line) => sum + line.price * line.quantity, 0);

  return (
    <div>
      <h2>Order Lines</h2>
      <div style={{marginBottom: 16, display: 'flex', gap: 16}}>
        <div>
          <label>Filter by Order ID: </label>
          <input
            type="number"
            min="1"
            value={orderIdFilter}
            onChange={e => setOrderIdFilter(e.target.value)}
            style={{width: 80}}
            placeholder="All"
          />
        </div>
        <div>
          <label>Search Product: </label>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Name or SKU"
          />
        </div>
      </div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Product</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price ($)</th>
            <th>Subtotal ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredLines.map(line => (
            <tr key={line.orderLineId}>
              <td>{line.orderLineId}</td>
              <td>{line.orderId}</td>
              <td>{line.productName}</td>
              <td>{line.productSKU}</td>
              <td>{line.quantity}</td>
              <td>{line.price.toFixed(2)}</td>
              <td>{(line.price * line.quantity).toFixed(2)}</td>
            </tr>
          ))}
          {filteredLines.length > 0 && (
            <tr style={{fontWeight: 'bold', background: '#e9eef3'}}>
              <td colSpan={6} style={{textAlign: 'right'}}>Total:</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderLines;
