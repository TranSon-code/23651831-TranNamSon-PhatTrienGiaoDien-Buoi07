import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeNotification } from '../features/notifications/notifySlice';

const NotificationHost = () => {
  const messages = useSelector((state) => state.notify.messages);
  const dispatch = useDispatch();

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
      {messages.map((m) => (
        <ToastItem key={m.id} message={m} />
      ))}
    </div>
  );
};

// Tách nhỏ Item để xử lý logic tự xóa sau 3s
const ToastItem = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(message.id));
    }, 3000); // Tự biến mất sau 3 giây

    return () => clearTimeout(timer);
  }, [message.id, dispatch]);

  const bg = message.type === 'success' ? '#4caf50' : message.type === 'error' ? '#f44336' : '#2196f3';

  return (
    <div style={{
      background: bg,
      color: 'white',
      padding: '12px 24px',
      marginBottom: '10px',
      borderRadius: '4px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      minWidth: '200px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      {message.text}
    </div>
  );
};

export default NotificationHost;