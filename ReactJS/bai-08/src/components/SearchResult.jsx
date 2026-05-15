import { useSelector } from 'react-redux';

const SearchResult = () => {
  const { results, loading, error } = useSelector((state) => state.search);

  if (loading) return <p>Đang tìm kiếm...</p>;
  if (error) return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <ul style={{ padding: 0 }}>
      {results.map((user) => (
        <li key={user.id} style={{ listStyle: 'none', padding: '10px', borderBottom: '1px solid #eee' }}>
          <strong>{user.name}</strong> (@{user.username})
        </li>
      ))}
      {results.length === 0 && <p>Không có kết quả phù hợp.</p>}
    </ul>
  );
};

export default SearchResult;