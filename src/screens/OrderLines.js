// Currency formatter for ZAR
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  }).format(amount);
import React, { useEffect, useState } from "react";
// import api from "../api/api";

const productImages = {
  "Baby Blanket": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "Cotton Onesie": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "Baby Hat": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
};



function OrderLines({ isAuthenticated }) {
  const [orderLines, setOrderLines] = useState([]);
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [search, setSearch] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

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
    <div className="products-page">
      <h2 className="products-title">Shop Our Baby Cotton Collection</h2>
      <div className="products-search-bar">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for clothes (name or SKU)"
        />
      </div>
      <div className="products-grid">
        {filteredLines.map(line => (
          <div className="product-card" key={line.orderLineId}>
            <img
              src={productImages[line.productName] || 'https://via.placeholder.com/200x200?text=No+Image'}
              alt={line.productName}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{line.productName}</h3>
              <div className="product-sku">SKU: {line.productSKU}</div>
              <div className="product-price">{formatCurrency(line.price)}</div>
            </div>
            {isAuthenticated ? (
              <button className="auth-btn product-buy-btn" onClick={() => alert('Buying...')}>Buy</button>
            ) : (
              <button className="auth-btn product-buy-btn" onClick={() => setShowPrompt(true)}>Buy</button>
            )}
          </div>
        ))}
      </div>
      {filteredLines.length === 0 && (
        <div className="products-empty">No products found.</div>
      )}
      {showPrompt && (
        <div className="products-login-prompt">
          Please <a href="/login">log in</a> or <a href="/signup">sign up</a> to buy clothes.
          <button className="products-close-btn" onClick={()=>setShowPrompt(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default OrderLines;
