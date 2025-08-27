import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // TODO: Add sign up logic here
    alert(`Signing up with ${email}`);
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <label htmlFor="signup-email">Email</label>
          <div className="input-icon">
            <span className="material-icons">mail</span>
            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="signup-password">Password</label>
          <div className="input-icon">
            <span className="material-icons">lock</span>
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <span
              className="material-icons password-toggle"
              onClick={() => setShowPassword(s => !s)}
              title={showPassword ? 'Hide password' : 'Show password'}
              style={{ cursor: 'pointer', marginLeft: 8 }}
            >
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </div>
        </div>
        {error && <div className="auth-error">{error}</div>}
        <button className="auth-btn" type="submit">Sign Up</button>
      </form>
      <div className="auth-footer">
        <span>Already have an account?</span> <a href="/login" style={{ textDecoration: 'underline', color: '#d32f2f', fontWeight: 600 }}>Login</a>
      </div>
    </div>
  );
}

export default SignUp;
