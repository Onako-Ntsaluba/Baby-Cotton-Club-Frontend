import React from "react";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: "linear-gradient(90deg, #fff 60%, #ffeaea 100%)",
        padding: "3rem 1rem 2rem 1rem",
        textAlign: "center",
        borderRadius: "18px",
        margin: "2rem auto 2rem auto",
        maxWidth: 900,
        boxShadow: "0 4px 32px rgba(0,0,0,0.07)"
      }}>
        <h1 style={{ fontSize: "2.7rem", fontWeight: 700, color: "#d32f2f", marginBottom: 12 }}>
          BOGO 50% Off Baby Cotton!
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#222", marginBottom: 24 }}>
          Shop our softest essentials and new arrivals. Limited time only!
        </p>
        <a href="/order-lines" className="btn" style={{ fontSize: "1.15em" }}>Shop Now</a>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections" style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "2rem auto",
        maxWidth: 900
      }}>
        <div className="collection-card" style={{
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          width: 260
        }}>
          <img src="https://images.unsplash.com/photo-1519864600265-abb23843a6c1?auto=format&fit=crop&w=400&q=80" alt="New Arrivals" style={{ width: "100%", borderRadius: "10px", marginBottom: 16 }} />
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#d32f2f", marginBottom: 8 }}>New Arrivals</h2>
          <p style={{ color: "#222", marginBottom: 12 }}>Fresh styles for every little one.</p>
          <a href="/order-lines?category=baby&type=new arrivals" className="btn" style={{ fontSize: "1em" }}>Shop New</a>
        </div>
        <div className="collection-card" style={{
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          width: 260
        }}>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Essentials" style={{ width: "100%", borderRadius: "10px", marginBottom: 16 }} />
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#d32f2f", marginBottom: 8 }}>Essentials</h2>
          <p style={{ color: "#222", marginBottom: 12 }}>Everyday comfort, always in style.</p>
          <a href="/order-lines?category=baby&type=essentials" className="btn" style={{ fontSize: "1em" }}>Shop Essentials</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
