import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const TodoInput = () => {
  const [val, setVal] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim()) {
      dispatch(addTodo(val));
      setVal('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={val} 
        onChange={(e) => setVal(e.target.value)} 
        placeholder="Làm gì tiếp theo đây?" 
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 15px', marginLeft: '5px' }}>Thêm</button>
    </form>
  );
};

export default TodoInput;