import React from "react";
import ItemListContainer from "./ItemListContainer";
import { listApi } from "../api";


const Productos = () => {
    const [items, setItem] = React.useState([]);

    React.useEffect(() => {
        listApi()
        .then((respuesta) => {
          return respuesta.json()})
        .then((respuesta) => {
            setItem(respuesta)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    console.log(items);
    
    return (
        <ItemListContainer items={items} />
    )
}

export default Productos;