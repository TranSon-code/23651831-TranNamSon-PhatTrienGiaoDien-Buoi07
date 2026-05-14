import { useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

const ComponentB = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '10px', border: '1px solid #28a745' }}>
      <h4>Component B (Publisher)</h4>
      <button onClick={() => dispatch(increment())}>Tăng số</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '8px' }}>Giảm số</button>
    </div>
  );
};

export default ComponentB;