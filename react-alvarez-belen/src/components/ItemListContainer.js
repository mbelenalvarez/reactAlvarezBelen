import Box from '@mui/material/Box';
import { listApi } from "../api";
import TabsMenu from './Tab';
import { useNavigate, useParams } from 'react-router-dom';
import Item from './Item';

const CATEGORIES = [{id: 'all', title: 'Todos los productos'}, {id: 'jewelery', title: 'Joyas'}, {id: 'electronics', title: 'Electrónica'}]

const searchCategory = (id) => {
  switch (id) {
    case 'jewelery':
      return 'Joyas';
    case 'electronics':
      return 'Electrónica';
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
         items={Productos} loading={loading} 
      </div>
    </div>
  )
}

const ItemListContainer = ({ items, loading}) => {
    return (
      <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={5} flexWrap={'wrap'}>
      <div style={containerStyle}>
          {
              Boolean(loading)        ?
                  <p>cargando...</p>
              :
              items.map((item) => <Item data={item}  />)
          }
    </div>
  </Box>
    )
}
  
  export default ItemListContainer
