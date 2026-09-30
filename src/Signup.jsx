import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ fullName: '', username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Headers explicit kar dein taaki Express ko pata ho ke JSON data aa raha hai
      const response = await axios.post('https://product-mvc-production-2756.up.railway.app/api/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log('Signup Successful:', response.data);
      navigate('/login');
    } catch (err) {
      console.error('Signup Error:', err);
      setError(err.response?.data?.error || 'Failed to create an account. Please try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '40px 35px',
        borderRadius: '16px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a202c', marginBottom: '8px', textAlign: 'center' }}>
          Create Account
        </h2>
        <p style={{ color: '#718096', fontSize: '14px', marginBottom: '24px', textAlign: 'center' }}>
          Sign up to get started with your dashboard.
        </p>
        
        {error && (
          <div style={{ background: '#fff5f5', color: '#e53e3e', padding: '10px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px', textAlign: 'center', border: '1px solid #feb2b2' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4a5568', marginBottom: '6px' }}>Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required 
              placeholder="John Doe"
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', backgroundColor: '#f8fafc', boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4a5568', marginBottom: '6px' }}>Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              required 
              placeholder="johndoe"
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', backgroundColor: '#f8fafc', boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4a5568', marginBottom: '6px' }}>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="name@example.com"
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', backgroundColor: '#f8fafc', boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4a5568', marginBottom: '6px' }}>Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
              placeholder="••••••••"
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', backgroundColor: '#f8fafc', boxSizing: 'border-box'
              }}
            />
          </div>
          <button 
            type="submit" 
            style={{
              width: '100%', padding: '13px', backgroundColor: '#667eea', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ fontSize: '14px', color: '#718096', marginTop: '20px', textAlign: 'center' }}>
          Already have an account? <Link to="/login" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Login In</Link>
        </p>

        {/* Back to Home Link */}
        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <Link to="/" style={{ color: '#718096', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;