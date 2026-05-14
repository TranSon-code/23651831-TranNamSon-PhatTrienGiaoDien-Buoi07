import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <strong>My App</strong>
      <span>{user ? `Chào, ${user.username}` : 'Khách'}</span>
    </nav>
  );
};

export default Navbar;