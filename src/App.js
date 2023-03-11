
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Register from './components/Register/Register';

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProtectedRoute>
          <Products />
        </ProtectedRoute>} />
        <Route path='/orders' element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
