import { useSelector } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const mode = useSelector((state) => state.theme.mode);

  // Thiết lập style dựa trên theme hiện tại
  const appStyle = {
    backgroundColor: mode === 'light' ? '#ffffff' : '#222222',
    color: mode === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    transition: 'all 0.3s ease', // Hiệu ứng đổi màu mượt mà
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={appStyle}>
      <h1>Chế độ hiện tại: {mode.toUpperCase()}</h1>
      <ThemeToggle />
      <p>Thử nhấn nút và F5 lại trang web xem màu có giữ nguyên không nhé!</p>
    </div>
  );
}

export default App;