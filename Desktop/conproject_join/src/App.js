import { Route, Routes } from 'react-router-dom';
import './App.css';
import Join from './Pages/JoinPages/Join';
import JoinCheck from './Pages/JoinPages/JoinCheck';
import Login from './Pages/LoginPages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/check" element={<JoinCheck />} />
    </Routes>

  );
}

export default App;
