import React from "react"
import DashboardCard from "../ui/dashboard/card/card"
import Charts from "../ui/dashboard/charts/charts"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import TransactionDashUi from "../ui/dashboard/TransactionDahsUi/TransactionDashUi"


export default function Dashboard (){
    
    return(
    <>
    <DashboardCard/>
    <Charts/>
    <Rightbar/>
<TransactionDashUi/>
    
    </>
    )
}