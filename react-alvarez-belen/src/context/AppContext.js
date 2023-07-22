import {createContext, useState} from 'react';

export const AppContext = createContext();

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito)
    const addProductToCarrito = (product) => {
         setCarrito([...carrito, product]);
    }

    return (
        <AppContext.Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length  }}>
            { children }
        </AppContext.Provider>
    )
}
export default ContextProvider