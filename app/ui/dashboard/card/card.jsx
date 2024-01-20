"use client"
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const drawerWidth = 257

export default function DashboardCard (){
    return(
    <>
    <Box
        sx={{ flexGrow: 3,
        marginTop:"70px",
        alignItems:"center",
        padding:"20px 0",
        color:"#fff",
        justifyContent:'space-between',
        width: { sm: `calc(80% - ${drawerWidth}px)` },
        display:{sm:"flex", xs:"none "},
        flexWrap:"wrap",
        ml: { sm: `${drawerWidth}px` } }}
        >
 <Card sx={{ maxWidth: 275 , height:"fit-content", margin:"10px 0"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
        Total Users
        </Typography>
        <Typography variant="h5" component="div">
        10.276
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>     
    <Card sx={{ maxWidth: 275, height:"fit-content", margin:"10px 0" }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        Total Products
        </Typography>
        <Typography variant="h5" component="div">
        1076
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>     
    <Card sx={{ maxWidth: 275 , height:"fit-content", margin:"10px 0"}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        Total Profiles
        </Typography>
        <Typography variant="h5" component="div">
        1090
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>      
    <Card sx={{ maxWidth: 275 , height:"fit-content", margin:"10px 0"}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        Total Views
        </Typography>
        <Typography variant="h5" component="div">
        100000
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>      
      </Box>
    </>
    )
}