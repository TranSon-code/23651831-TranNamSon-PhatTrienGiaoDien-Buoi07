import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h2 style={{ textAlign: 'center' }}>🔍 User Search Debounce</h2>
      <SearchInput />
      <SearchResult />
    </div>
  );
}

export default App;