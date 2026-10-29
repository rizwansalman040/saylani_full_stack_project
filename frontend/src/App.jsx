import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCatalog from './components/UserPanel/ProductCatalog';
import AdminDashboard from './components/AdminPanel/AdminDashboard';

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', background: '#333', color: 'white', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>User Panel (Catalog)</Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin Panel (Dashboard)</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;