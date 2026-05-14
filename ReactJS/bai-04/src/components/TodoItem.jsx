import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newText = prompt("Sửa nội dung:", todo.text);
    if (newText) {
      dispatch(editTodo({ id: todo.id, newText }));
    }
  };

  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '8px', 
      borderBottom: '1px solid #eee',
      alignItems: 'center'
    }}>
      <span 
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          cursor: 'pointer',
          flex: 1
        }}
      >
        {todo.text}
      </span>
      
      <div style={{ display: 'flex', gap: '5px' }}>
        <button onClick={handleEdit} style={{ background: '#ffc107', border: 'none' }}>Sửa</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ background: '#ff4d4f', color: 'white', border: 'none' }}>Xóa</button>
      </div>
    </li>
  );
};

export default TodoItem;