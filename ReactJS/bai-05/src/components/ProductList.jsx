import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'iPhone 15', price: 1000 },
  { id: 2, name: 'Macbook M3', price: 2000 },
  { id: 3, name: 'AirPods Pro', price: 200 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Sản phẩm bày bán</h3>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '5px' }}>
          <span>{p.name} - ${p.price} </span>
          <button onClick={() => dispatch(addToCart(p))}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;