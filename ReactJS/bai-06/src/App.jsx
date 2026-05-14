import NotificationHost from './components/NotificationHost';
import TestButtons from './components/TestButtons';

function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Notification System (Global State)</h1>
      <p>Nhấn các nút dưới đây để kích hoạt Toast Message từ Global Store.</p>
      <TestButtons />
      
      {/* Đặt NotificationHost ở đây để nó luôn lắng nghe Store */}
      <NotificationHost />

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;