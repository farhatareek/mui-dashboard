"use client"
import React, { useState } from "react";
import Navbar from "../navbar/page";
import Sidebar from "../sidebar/page";




export default function Main ({children}){
    const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
      
    return(
        <>
        <div>
        <Navbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        </div>
        <div>
        <Sidebar  handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        </div>
        {children}
       
        </>
    )
}