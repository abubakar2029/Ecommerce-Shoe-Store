import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrandPage from './Pages/BrandPage/BrandPage';
import Home from './Pages/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { NavigationCard } from './Components/NavigationCard/NavigationCard';
import { SelectedCard } from "./Components/SelectedCard/SelectedCard"
import { Footer } from "./Components/Footer/Footer"
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Cart from './Components/Cart/Cart';
import { AdminPanel } from './Pages/AdminPanel/AdminPanel';
import { AdminPanelCards } from './Components/adminPanelCards/adminPanelCards';
import { CreateProduct } from './Pages/CreateProduct/CreateProduct';
import PendingOrders from './Pages/PendingOrders/PendingOrders';
import { CompletedOrders } from './Pages/CompletedOrders/CompletedOrders';
import AllProducts from './Pages/AllProducts/AllProducts';
import { LandingPage } from './Pages/LandingPage/LandingPage';

function App() {

  return (
    <div className="App flex flex-col justify-between ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/brand' element={<BrandPage />} />
          <Route path='/panelCards' element={<AdminPanelCards />} />
          <Route path='/slected-card' element={<SelectedCard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/newproduct' element={<CreateProduct />} />
          <Route path='/pendingOrders' element={<PendingOrders />} />
          <Route path='/completedOrders' element={<CompletedOrders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
