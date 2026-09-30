import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
          Welcome to MyApp
        </h1>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>
          Aage barhne ke liye niche diye gaye buttons par click karein.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/login" style={{
            padding: '12px',
            backgroundColor: '#667eea',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}>
            Login
          </Link>

          <Link to="/signup" style={{
            padding: '12px',
            backgroundColor: '#fff',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '15px',
            border: '2px solid #667eea'
          }}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}