import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();
  const { cartItems, total } = useCart();

  // Tính tổng số lượng món hàng trong giỏ
  const cartCount = cartItems.reduce((qty, item) => qty + item.qty, 0);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const buttonStyle = {
    padding: '5px 15px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    marginLeft: '10px'
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Sơn Store 🍎
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Phần Giỏ hàng */}
        <div style={{ marginRight: '20px' }}>
          🛒 <strong>{cartCount}</strong> món (${total.toFixed(2)})
        </div>

        {/* Phần Đăng nhập */}
        <div style={{ borderLeft: '1px solid #555', paddingLeft: '20px' }}>
          {user ? (
            <>
              <span>Chào, <strong>{user.name}</strong></span>
              <button 
                onClick={logout} 
                style={{ ...buttonStyle, backgroundColor: '#ff4d4f', color: 'white' }}
              >
                Thoát
              </button>
            </>
          ) : (
            <button 
              onClick={() => login("Nam Sơn")} 
              style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}
            >
              Đăng nhập
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;