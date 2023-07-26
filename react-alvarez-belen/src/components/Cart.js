import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(AppContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.stock}</p>
                    <p>Cantidad: {prod.stock}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío </h2>
        }
        
    </div>
  )
}

export default Cart