import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const stats = [
    { title: 'Active Products', value: '3', badge: 'Active', bg: '#ebf8ff', color: '#3182ce' },
    { title: 'Total Revenue', value: '$1,240.00', badge: '+12%', bg: '#f0fff4', color: '#38a169' },
    { title: 'Pending Orders', value: '18', badge: 'Urgent', bg: '#fffaf0', color: '#dd6b20' },
  ];

  const products = [
    { name: 'Wireless Headphones', category: 'Electronics', price: '$120.00', status: 'In Stock' },
    { name: 'Smartwatch Series 5', category: 'Accessories', price: '$250.00', status: 'Low Stock' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Navbar */}
      <header style={{
        backgroundColor: '#ffffff',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#1a202c', margin: 0 }}>MyApp Dashboard</h1>
          <span style={{ fontSize: '12px', color: '#718096', fontWeight: '500' }}>Secure System • Overview</span>
        </div>

        {/* Right side buttons: Home & Logout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#4a5568', 
              textDecoration: 'none', 
              fontSize: '14px', 
              fontWeight: '600',
              transition: '0.2s'
            }}
          >
            &larr; Home
          </Link>
          <button 
            onClick={handleLogout}
            style={{
              padding: '8px 18px',
              backgroundColor: '#fed7d7',
              color: '#c53030',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '13px',
              cursor: 'pointer',
              transition: '0.2s'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ padding: '32px', maxWidth: '1200px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Welcome Section */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#2d3748', margin: '0 0 6px 0' }}>
            Welcome back to your Dashboard 👋
          </h2>
          <p style={{ color: '#718096', fontSize: '14px', margin: 0 }}>
            Here is a quick overview of your store performance today.
          </p>
        </div>

        {/* Stats Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '14px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              border: '1px solid #edf2f7'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#718096' }}>{stat.title}</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '20px', backgroundColor: stat.bg, color: stat.color }}>
                  {stat.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#1a202c', margin: 0 }}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
          border: '1px solid #edf2f7'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2d3748', marginBottom: '20px' }}>
            Store Products Inventory
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {products.map((prod, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#f8fafc',
                borderRadius: '10px',
                border: '1px solid #e2e8f0'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#2d3748' }}>{prod.name}</h4>
                  <span style={{ fontSize: '13px', color: '#718096' }}>Category: {prod.category}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#4a5568' }}>{prod.price}</span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: prod.status === 'In Stock' ? '#def7ec' : '#fef08a',
                    color: prod.status === 'In Stock' ? '#03543f' : '#713f12'
                  }}>
                    {prod.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;