'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Toolbar } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
const drawerWidth=255

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  

export default function Charts() {
  return (
    <Box sx={{ width: { sm: `calc(80% - ${drawerWidth}px)` },
    bgcolor:"#182237",
    p:1,
    borderRadius:"10px",
    boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
    ml: { sm: `${drawerWidth}px`},
    display:{sm:"flex", xs:"block"}
    }}>
        <Toolbar/>
        <LineChart 
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], }] }
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      sx={{width:{sm:`calc(100%)`,},  "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
        stroke:"#fFF",
        strokeWidth:0.4
       },
       // leftAxis Line Styles
       "& .MuiChartsAxis-left .MuiChartsAxis-line":{
        stroke:"#fFF",
        strokeWidth:0.4
       }, "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
        strokeWidth:"0.4",
        fill:"#fff"
       },
           // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.5",
            fill:"#fFF"
         },}}
      height={300}
      
    />
     <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      sx={{width:{sm:`calc(100%)` }}} 
      height={300}
    />
    </Box>
  );
}