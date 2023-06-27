import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from '../src/components/Navbar';
import Productos from '../src/components/ProductosList';
import CardItem from '../src/components/CardItem';
import CartWidget from '../src/components/CartWidget';
import ItemListContainer from "../src/components/ItemListContainer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Productos />
        <CardItem />
        <ItemListContainer />
        <CartWidget />
    </div>
  )
}

export default HomePage;
reportWebVitals();
