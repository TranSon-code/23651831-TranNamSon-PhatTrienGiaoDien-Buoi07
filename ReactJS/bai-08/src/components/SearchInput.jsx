import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers, clearResults } from '../features/search/searchSlice';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // Nếu ô nhập trống thì xóa kết quả cũ
    if (!query.trim()) {
      dispatch(clearResults());
      return;
    }

    // Thiết lập thời gian chờ (Debounce)
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchUsers(query));
    }, 500); // Đợi 0.5 giây sau khi ngừng gõ mới gọi API

    // Cleanup function: Xóa timer cũ nếu người dùng gõ phím mới khi chưa tới 500ms
    return () => clearTimeout(delayDebounceFn);
  }, [query, dispatch]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Tìm kiếm user (ví dụ: Leanne)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SearchInput;