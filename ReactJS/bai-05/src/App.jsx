import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Apple Store Global State</h2>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;