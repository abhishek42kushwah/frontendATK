import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/loginPage';
import Signup from './pages/signUpPage';
import Dashboard from './pages/Dashboad';
import Navbar from './pages/Nabvar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nabvar" element={<Navbar />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
