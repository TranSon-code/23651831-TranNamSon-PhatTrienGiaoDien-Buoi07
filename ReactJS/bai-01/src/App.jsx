import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>Redux Toolkit Architecture</h2>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;