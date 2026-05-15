import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import Navbar from './components/Navbar';
import Notification from './components/Notification';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Navbar />
            <main style={{ padding: '20px' }}>
              <ProductList />
            </main>
            <Notification />
          </div>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}