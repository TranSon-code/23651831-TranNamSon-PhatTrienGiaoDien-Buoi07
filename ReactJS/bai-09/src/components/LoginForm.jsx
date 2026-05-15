import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';

const LoginForm = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h3>Đăng nhập hệ thống</h3>
      <input 
        placeholder="Username (admin)" 
        onChange={e => setForm({...form, username: e.target.value})} 
      />
      <input 
        type="password" 
        placeholder="Password (123)" 
        onChange={e => setForm({...form, password: e.target.value})} 
      />
      <button disabled={loading}>{loading ? 'Đang xử lý...' : 'Đăng nhập'}</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
};

export default LoginForm;