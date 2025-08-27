import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div style={{ marginBottom: "1rem" }}>
        &copy; {new Date().getFullYear()} Baby Cotton Club. All rights reserved.
        <span style={{ marginLeft: "1rem" }}>
          <a href="https://www.instagram.com/cottonon/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/cottonon/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <a href="#size-guide" className="footer-link">Size Guide</a>
        <a href="#free-returns" className="footer-link">Free Returns</a>
        <a href="#loyalty" className="footer-link">Baby Cotton Club Perks</a>
      </div>
      <div id="loyalty" style={{ background: "#fff", color: "#d32f2f", borderRadius: "10px", padding: "1rem 2rem", maxWidth: 400, margin: "0 auto", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <strong>Baby Cotton Club Perks:</strong> Get 20% off your first order &amp; earn points for every purchase!<br />
        <span style={{ fontSize: "0.98em", color: "#222" }}>$1 = 1 point. Every 50 points = $5 reward.</span>
      </div>
    </footer>
  );
}

export default Footer;
