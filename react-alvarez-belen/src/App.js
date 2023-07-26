import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContextProvider from './context/AppContext';


function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<ItemListContainer />}  />
        <Route path={'/products'} element={<ItemListContainer />}  />
        <Route path={'/products/:id'} element={<ItemListContainer />}  />
        <Route path={'/product/:id'} element={<ItemDetailContainer />}  />
        <Route path={'/cart'} element={<CartWidget />} />
        <Route path={'/cart'} element={<Cart />}/>
        <Route path={'/checkout'} element={<Checkout />}/>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
