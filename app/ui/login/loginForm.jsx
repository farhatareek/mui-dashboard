  'use client'

  import * as React from 'react';
  import { Box } from '@mui/joy';
  import { useFormState } from "react-dom";
  import { Input, Typography } from '@mui/material';
  import { authentcate } from '@/app/lib/actions';
   
  const LoginForm = ()=>{
    const [state, formAction] = useFormState(authentcate, undefined);

return (
<Box   sx={{
p:{sm:3, xs:0},
width:{sm:'20%', xs:'100%'},
margin:"20px auto",
borderRadius:"10px",
backgroundColor: "#151c2c",
}} >
<form action={formAction} style={{display:"flex" ,color:"#fff",gap:5,flexWrap:"wrap" ,justifyContent:"center"}}  >
<Typography sx={{color:"#fff", fontSize:"25px",alignSelf:"center"}}>LOGIN</Typography>
<Input name='username' type='text' sx={{width:{sm:"calc(100%)",color:"#fff", xs:"70%"},margin:"50px", padding:"10px"}} placeholder='Username' required/>
<Input name='password' type='password' sx={{width:{sm:"calc(100%)", color:"#fff",xs:"70%"},margin:"50px", padding:"10px"}} placeholder="Password" required />
<button style={{width:"calc(90%)", padding:"10px", border:"none",margin:"20px",cursor:"pointer",backgroundColor:"#182237"}} color='success'>submit</button>
<div >
{state && state}
</div>
</form>
</Box>
);
  }


  export default LoginForm