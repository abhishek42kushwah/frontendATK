import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/loginPage';
import Signup from './pages/signUpPage';
import Dashboard from './pages/Dashboad';
import Navbar from './pages/Nabvar';
import SareeDetails from "./components/SareeDetails"
import CartPage from './pages/CartPage';
import OrderStatus from './components/OrderStatus';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nabvar" element={<Navbar />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path='/saree-details' element={<SareeDetails/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/order-status' element={<OrderStatus/>} />
      </Routes>
    </Router>
  );
}

export default App;
