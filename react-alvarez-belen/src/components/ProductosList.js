import React from "react";
import ItemListContainer from "./ItemListContainer";
import { listApi } from "../api";
import TabsMenu from '..tab';
import { useNavigate, useParams } from 'react-router-dom';

const CATEGORIES = [{id: 'all', title: 'Todos los productos'}, {id: 'cel', title: 'Celulares'}, {id: 'tablets', title: 'Tablets'}]

const searchCategory = (id) => {
  switch (id) {
    case 'tablets':
      return 'tablets';
    case 'cel':
      return 'celulares';
    default:
      return 'all'
  }}

const Productos = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';

  console.log(category);

  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])

  React.useEffect(() => {
    setLoading(true);
    listApi(searchCategory(category))
    .then(res => res.json())
    .then(res => {
      const data = res.results?.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image
      }))
      setItems(data);
    })
    .finally(() => setLoading(false))
  }, [category])

  return (
    <div>
      <TabsMenu current={current} items={CATEGORIES} />
      <div style={{ padding: 50}}>
        <ItemListContainer items={items} loading={loading} />
      </div>
    </div>
  )
}

export default Productos;