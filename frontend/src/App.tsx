import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentList from './pages/DocumentList';
import ViewDocument from './pages/ViewDocument';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocumentList />} />
        <Route path="/docs/view/:token" element={<ViewDocument />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
