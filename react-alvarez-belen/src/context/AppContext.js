import {createContext, useState} from 'react';

export const AppContext = createContext();
const { Provider } = AppContext;

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addProductToCarrito = (product) => {
         setCarrito([...carrito, product]);
    }

    return (
        <Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length  }}>
            { children }
        </Provider>
    )
}
export default ContextProvider