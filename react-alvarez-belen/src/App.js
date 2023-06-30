import './App.css';
import CardItem from './components/CardItem';
import CartWidget from './components/CartWidget';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ProductosList />
      <CardItem />
      <CartWidget /> 
    </div>
  )
}

export default App;
