import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import SecretData from './components/SecretData';

function App() {
  const token = useSelector(state => state.auth.token);

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', fontFamily: 'sans-serif' }}>
      {/* Nếu chưa có token thì hiện Form Login, có rồi thì hiện Data */}
      {!token ? <LoginForm /> : <SecretData />}
    </div>
  );
}

export default App;