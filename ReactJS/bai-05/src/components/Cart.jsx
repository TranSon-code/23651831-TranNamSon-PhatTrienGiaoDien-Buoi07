import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div style={{ background: '#f9f9f9', padding: '20px', marginTop: '20px' }}>
      <h3>Giỏ hàng của bạn 🛒</h3>
      {cartItems.length === 0 ? <p>Trống trơn...</p> : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{item.name} (${item.price}) x {item.quantity}</span>
              <div>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} style={{color: 'red'}}>Xóa</button>
              </div>
            </div>
          ))}
          <hr />
          <h4>Tổng cộng: <span style={{color: 'green'}}>${totalPrice}</span></h4>
        </>
      )}
    </div>
  );
};

export default Cart;