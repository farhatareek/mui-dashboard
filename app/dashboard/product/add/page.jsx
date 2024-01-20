import * as React from 'react';
import { Box, Textarea } from '@mui/joy';
import { Button, Input } from '@mui/material';
import { addProduct } from '@/app/lib/actions';


const selectOptions = [
  {label: "true"},
  {label:"false"}
]

export default function AddProduct() {
  return (
    <Box   sx={{
    p:{sm:3, xs:0},
    width:{sm:'80%', xs:'100%'},
    mt:"90px",
    ml:{sm:"260px",sx:"0"},
    borderRadius:"10px",
    backgroundColor: "#151c2c",
    }} >
    <form action={addProduct} style={{display:"flex" ,gap:5,flexWrap:"wrap" ,justifyContent:"space-around"}}  >
    <Input name='title' type='text' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px", padding:"10px"}} placeholder="title" required/>
    <Input name='price' type='text' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px", padding:"10px"}} placeholder="price" required />
    <Input name='color' type='text' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px", padding:"10px"}} placeholder="color" required/>
    <Input name='stock' type='text' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px" ,padding:"10px"}} variant="plain" placeholder="stock" />
    <Input name='category' type='text' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px" ,padding:"10px"}} variant="plain" placeholder="category" />
    
    <Textarea   sx={{width:"calc(90%)", margin:"50px",}} minRows={6}  name="desc" placeholder="Product Info…" variant="plain" />
    <Button id='submitProduct' type='submit' sx={{width:"calc(90%)" ,margin:"20px",backgroundColor:"#182237"}} color='success'>submit</Button>
  </form>
  </Box>
  );
}


