import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotify } from '../features/notify/notifySlice';

const Notification = () => {
  const message = useSelector(state => state.notify.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => dispatch(clearNotify()), 2000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '20px', left: '20px',
      background: '#333', color: '#fff', padding: '10px 20px', borderRadius: '5px'
    }}>
      {message}
    </div>
  );
};

export default Notification;