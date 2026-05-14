import { useDispatch } from 'react-redux';
import { addNotification } from '../features/notifications/notifySlice';

const TestButtons = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => dispatch(addNotification({ text: 'Lưu thành công! ✅', type: 'success' }))}>
        Hiện Success
      </button>
      <button onClick={() => dispatch(addNotification({ text: 'Có lỗi xảy ra! ❌', type: 'error' }))}>
        Hiện Error
      </button>
    </div>
  );
};

export default TestButtons;