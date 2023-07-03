import Box from '@mui/material/Box';
import CardItem from './CardItem';


const ItemListContainer = ({ items, loading}) => {
    return (
      <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={5} flexWrap={'wrap'}>
      <div style={containerStyle}>
          {
              Boolean(loading)        ?
                  <p>cargando...</p>
              :
          items.map((item, index) => {
              return (
                  <CardItem key={index + item.title} name={item.title} price={item.price} imageURL={item.image} description={item.description} />
              )
          })
      } </div>
  </Box>
    )
}
  
  export default ItemListContainer
