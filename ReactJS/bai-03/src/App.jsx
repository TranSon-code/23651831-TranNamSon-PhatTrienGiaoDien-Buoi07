import { useDispatch, useSelector } from 'react-redux';
import { login } from './features/auth/authSlice';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    // Giả lập dữ liệu trả về từ API
    const mockUser = { username: 'Nam Sơn', email: 'son@example.com' };
    dispatch(login(mockUser));
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        {!user ? (
          <div>
            <h2>Vui lòng đăng nhập hệ thống</h2>
            <button onClick={handleLogin}>Đăng nhập ngay</button>
          </div>
        ) : (
          <UserProfile />
        )}
      </div>
    </div>
  );
}

export default App;