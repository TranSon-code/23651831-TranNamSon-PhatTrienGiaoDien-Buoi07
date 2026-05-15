import { useCart } from '../context/CartContext';
import { useDispatch } from 'react-redux';
import { showNotify } from '../features/notify/notifySlice';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const dispatch = useDispatch();

  const handleBuy = () => {
    addToCart(product);
    dispatch(showNotify(`Đã thêm ${product.title.substring(0, 10)}... vào giỏ!`));
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      <img src={product.image} alt={product.title} style={{ height: '100px', objectFit: 'contain' }} />
      <h5 style={{ height: '40px', overflow: 'hidden' }}>{product.title}</h5>
      <p style={{ color: 'green', fontWeight: 'bold' }}>${product.price}</p>
      <button 
        onClick={handleBuy}
        style={{ background: '#007bff', color: '#fff', border: 'none', padding: '8px 15px', cursor: 'pointer' }}
      >
        Mua ngay
      </button>
    </div>
  );
};

export default ProductCard;