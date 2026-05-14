import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>📝 Todo List Global (V2)</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;