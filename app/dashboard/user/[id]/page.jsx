import * as React from 'react';
import { fetchUser} from '@/app/lib/data';
import { updateUser } from '@/app/lib/actions';
import { Box, Textarea } from '@mui/joy';
import {  Button,  FormLabel,Input } from '@mui/material';
import Autocomplete from '@mui/joy/Autocomplete';

const top100Films = [
  { label: 'yes', year: 1994 },
    { label: 'no', year: 1994 },
         ]

const SingleUser= async({params}) =>{
  const { id } = params;
  const user =await fetchUser(id)
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
    <form action={updateUser}  style={{display:"flex" ,gap:5,color:"#fff",flexWrap:"wrap" ,justifyContent:"space-around"}} >
    <input name='id' type='hidden' value={user.id}  />
    <FormLabel>Name</FormLabel>
    <Input name='username' type='text' sx={{width:{sm:"calc(80%)", xs:"70%"},margin:"10px"}} placeholder={user.username} required/>
    <FormLabel>Email</FormLabel>
    <Input name='email' type='email' sx={{width:{sm:"calc(80%)", xs:"70%"},margin:"10px"}} placeholder={user.email}required />
    <FormLabel>Phone</FormLabel>
    <Input name='phone' type='phone' sx={{width:{sm:"calc(80%)", xs:"70%"},margin:"10px" }} variant="plain" placeholder={user.phone} />
    <FormLabel>Is Admin</FormLabel>
    <Autocomplete
      placeholder={user.role}
      options={top100Films}
      name='role'
      sx={{ width:'calc(80%)',margin:"10px", color:"#000" }}
    />
    <FormLabel>Is Activ</FormLabel>
    <Autocomplete
      placeholder={user.activity}
      options={top100Films}
      name='activity'
      sx={{ width:'calc(80%)',margin:"10px" }}
    />
    <Textarea sx={{width:"calc(90%)", margin:"50px",}} minRows={6}  name="info" placeholder={user.info}  variant="plain" />
    <Button type='submit' sx={{width:"calc(90%)" ,margin:"20px",backgroundColor:"#182237"}} color='success'>submit</Button>
  </form>
  </Box>
  );
}

export default SingleUser


