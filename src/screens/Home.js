import React from "react";

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
    }}>
      <div style={{
        background: '#e6f0fa',
        borderRadius: 16,
        padding: '40px 32px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        textAlign: 'center',
        maxWidth: 500
      }}>
        <h1 style={{marginBottom: 16}}>Welcome to <span style={{color: '#4fc3f7'}}>Baby Cotton Club</span> 👶</h1>
        <p style={{fontSize: '1.2em', color: '#2d3a4a'}}>Your one-stop shop for premium baby cotton products. <br/>Manage orders, customers, and more with ease.</p>
      </div>
    </div>
  );
}

export default Home;
