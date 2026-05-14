import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!user) return <p>Vui lòng đăng nhập!</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '10px' }}>
      <h3>Hồ sơ người dùng</h3>
      <p>Tên: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => dispatch(logout())}>Đăng xuất</button>
    </div>
  );
};

export default UserProfile;