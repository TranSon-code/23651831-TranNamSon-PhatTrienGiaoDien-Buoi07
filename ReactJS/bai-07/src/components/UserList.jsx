import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div className="spinner">Đang tải dữ liệu, chờ xíu nhé Sơn...</div>;
  
  if (error) return <div style={{ color: 'red' }}>Lỗi rồi: {error}</div>;

  return (
    <div>
      <h3>Danh sách người dùng (API)</h3>
      <ul style={{ padding: 0 }}>
        {data.map((user) => (
          <li key={user.id} style={{ 
            listStyle: 'none', 
            padding: '10px', 
            borderBottom: '1px solid #eee',
            textAlign: 'left' 
          }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;