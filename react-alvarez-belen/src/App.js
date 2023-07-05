import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import Item from './components/Item';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<ItemListContainer />}  />
        <Route path={'/products/:category'} element={<ItemListContainer />}  />
        <Route path={'/product/:id'} element={<Item />}  />
        <Route path={'/cart'} element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
