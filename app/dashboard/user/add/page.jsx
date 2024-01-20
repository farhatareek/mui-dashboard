import * as React from 'react';
import { Box, Textarea } from '@mui/joy';
import { Button, Input } from '@mui/material';
import Autocomplete from '@mui/joy/Autocomplete';
import { addUsers } from '@/app/lib/actions';

const selectOptions = [
  {label: "true"},
  {label:"false"}
]

export default function AddUser() {
  return (
    <Box   sx={{
    p:{sm:3, xs:0},
    width:{sm:'80%', xs:'100%'},
    mt:"90px",
    ml:{sm:"260px",sx:"0"},
    borderRadius:"10px",
    backgroundColor: "#151c2c",
     
    }} >
    <form style={{display:"flex" ,gap:5,flexWrap:"wrap" ,justifyContent:"space-around"}} action={addUsers} >
    <Input name='username' type='text' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px", padding:"10px"}} placeholder="username" required/>
    <Input name='email' type='eamil' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px", padding:"10px"}} placeholder="Email" required />
    <Input name='password' type='password' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px", padding:"10px"}} placeholder="Pass" required/>
    <Input name='phone' type='phone' sx={{width:{sm:"calc(40%)", xs:"70%"},margin:"50px" ,padding:"10px"}} variant="plain" placeholder="phone" />
    <Autocomplete
      name="Role"
      sx={{ width:"calc(40%)", display:"inline-flex"}}
      options={selectOptions}
      placeholder='role'
    />
    <Autocomplete
      name="activity"
      options={selectOptions}
      sx={{ width:'calc(40%)',display:"inline-flex"}}
      id='activity'
      placeholder='activity'
    />
    <Textarea   sx={{width:"calc(90%)", margin:"50px",}} minRows={6}  name="info" placeholder="User Info…" variant="plain" />
    <Button type='submit' sx={{width:"calc(90%)" ,margin:"20px",backgroundColor:"#182237"}} color='success'>submit</Button>
  </form>
  </Box>
  );
}


