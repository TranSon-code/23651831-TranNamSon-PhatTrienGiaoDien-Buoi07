import { useSelector } from 'react-redux';

const ComponentA = () => {
  // state.counter lấy từ tên chúng ta đặt trong store.js
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ padding: '10px', border: '1px solid #007bff', marginBottom: '10px' }}>
      <h4>Component A (Subscriber)</h4>
      <p>Giá trị Count lấy từ Global Store: <strong>{count}</strong></p>
    </div>
  );
};

export default ComponentA;