import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <button 
      onClick={() => dispatch(toggleTheme())}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '20px',
        border: 'none',
        backgroundColor: mode === 'light' ? '#333' : '#eee',
        color: mode === 'light' ? '#fff' : '#333'
      }}
    >
      Chuyển sang chế độ {mode === 'light' ? 'Tối 🌙' : 'Sáng ☀️'}
    </button>
  );
};

export default ThemeToggle;