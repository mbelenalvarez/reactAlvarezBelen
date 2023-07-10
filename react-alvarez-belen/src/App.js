import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<ItemListContainer />}  />
        <Route path={'/products/:id'} element={<ItemListContainer />}  />
        <Route path={'/product/:id'} element={<ItemDetailContainer />}  />
        <Route path={'/cart'} element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
