import Box from '@mui/material/Box';

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
