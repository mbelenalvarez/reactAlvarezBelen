import {createContext, useState} from 'react';

export const AppContext = createContext();

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito)
    const addProductToCarrito = (product) => {
         setCarrito([...carrito, product]);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.stock, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <AppContext.Provider value={{ carrito, addProductToCarrito, precioTotal, vaciarCarrito, quantityCart: carrito.length  }}>
            { children }
        </AppContext.Provider>
    )
}
export default ContextProvider