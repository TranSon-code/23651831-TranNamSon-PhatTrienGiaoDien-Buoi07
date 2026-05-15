import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const SecretData = () => {
  const { user, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px' }}>
      <h2>Chào mừng, {user}! 👋</h2>
      <p>Bạn đã truy cập vào vùng dữ liệu bảo mật.</p>
      <div style={{ wordBreak: 'break-all', background: '#fff', padding: '10px' }}>
        <strong>Token của bạn:</strong> {token}
      </div>
      <br />
      <button onClick={() => dispatch(logout())} style={{ background: '#ff5252', color: 'white' }}>
        Đăng xuất
      </button>
    </div>
  );
};

export default SecretData;