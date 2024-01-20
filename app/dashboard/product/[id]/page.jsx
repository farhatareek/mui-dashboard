import * as React from 'react';
import { Box, Textarea } from '@mui/joy';
import { Button, FormLabel, Input } from '@mui/material';
import Autocomplete from '@mui/joy/Autocomplete';
import { Label } from '@mui/icons-material';
import { fetchProduct } from '@/app/lib/data';
import { updateProduct } from '@/app/lib/actions';

const top100Films = [
  { label: 'tech', year: 1994 },
    { label: 'clothing', year: 1994 },
    { label: 'food', year: 1972 },
    { label: 'makeup', year: 1974 },
    { label: 'accssesories', year: 2008 },
    { label: 'home decor', year: 1957 },
    { label: "kids", year: 1993 },
    { label: 'books', year: 1994 },
      ]
export default async function SingleProduct({params}) {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <Box sx={{  ml: { sm: "260px", xs:"0" } , 
    width:{sm:'80%', xs:'100%'},
    mt:"90px",
    borderRadius:"10px",
    backgroundColor: "#151c2c",
    p:{sm:3, xs:0},
    mt:"90px",
    display: 'flex',
    justifyContent:"center" ,
    gap: 5,
    alignItems: 'center',
      flexWrap: 'wrap' }}>
        <form action={updateProduct} style={{display:"flex" ,gap:5,flexWrap:"wrap" ,justifyContent:"space-around"}} >
    <FormLabel>{product.title}</FormLabel>
    <Input name='title' sx={{width:"calc(80%)"}}  placeholder={product.title} />
    <FormLabel>Price</FormLabel>
    <Input name='price' placeholder={product.price} sx={{width:"calc(80%)",margin:"10px"}}  />
    <FormLabel>Color</FormLabel>
    <Input name='color' sx={{width:"calc(80%)",margin:"10px"}} variant="plain" placeholder={product.color} />
    <FormLabel>Stock</FormLabel>
    <Input name='stock' sx={{width:"calc(80%)",margin:"10px"}} variant="plain" placeholder={product.stock} />
    <Autocomplete
      placeholder={product.category}
      options={top100Films}
      name='category'
      sx={{ width:'calc(80%)',margin:"10px" }}
    />
    <Textarea sx={{width:"calc(80%)"}} minRows={6}  name="desc" placeholder={product.desc} variant="plain" />
    <Button type='submit' sx={{width:"calc(83%)",margin:"10px",backgroundColor:"#182237"}} color='success'>submit</Button>
    </form>
  </Box>
  );

}