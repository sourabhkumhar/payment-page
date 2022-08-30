import './App.css';
import Navbar from './components/Navbar/Navbar';
import Payment from './components/Payment/Payment';
import Cart from './components/Payment/Cart/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import State from './context/State';
import Header from './components/Header/Header';
import Success from './components/Success';

function App() {
  return (
    <>
      <State>
        <Router>
          <Navbar />

          <div className="myContainer mt-5">
            <Header />

            <Routes>
              <Route path="/" element={<Payment />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
              <Route path="/success" element={<Success />}></Route>
            </Routes>

          </div>

        </Router>
      </State>
    </>
  );
}

export default App;
