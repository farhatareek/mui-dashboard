import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/joy';
import { handleSignOut} from '../lib/actions';
import { Toolbar } from '@mui/material';



const drawerWidth = 240;

function Sidebar ({handleDrawerToggle, mobileOpen}){

      const drawer = (
    <div  >
      <Typography sx={{color:"#fff", margin:"15px 10px 0 20px" }}>
      Welcome 
      </Typography>
      <Typography sx={{color:"#fff", margin:"0 15px 15px 30px " }}>User</Typography>
      <List>
        <ListItemText primary="Pages" sx={{padding:"10px"}} />
          <Link href="/dashboard">
          <ListItem sx={{display:'flex'}}  disablePadding>
            <ListItemButton >
              <ListItemIcon >
              <DashboardIcon color="string"  titleAccess='Dashboard'/>
              </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </ListItemButton>
          </ListItem>
          </Link>
        <Link href="/dashboard/user">
        <ListItem  disablePadding>
            <ListItemButton id='useriteambtn'>
              <ListItemIcon>
              <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="User"  />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/dashboard/product">
        <ListItem  disablePadding>
            <ListItemButton id='productsbtn'>
              <ListItemIcon>
              <ShoppingBagIcon/>
              </ListItemIcon>
              <ListItemText primary="Products"  />
            </ListItemButton>
          </ListItem>
          </Link>
        <Link href="/dashboard/transactionComponents">
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MonetizationOnIcon/>
              </ListItemIcon>
              <ListItemText primary="Transaction"  />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <List>
      <ListItemText primary="Analysis" sx={{padding:"10px"}} />
          <Link href="/dashboard">
          <ListItem   disablePadding>
            <ListItemButton >
              <ListItemIcon>
              <WorkHistoryIcon titleAccess='revenue'/>
              </ListItemIcon>
              <ListItemText primary="Revenue"/>
            </ListItemButton>
          </ListItem>
            </Link>
        <Link href="/dashboard">
        <ListItem  disablePadding>
            <ListItemButton >
              <ListItemIcon>
              <GroupsIcon  titleAccess='teams'/>
              </ListItemIcon>
              <ListItemText primary="Team"/>
            </ListItemButton>
          </ListItem>
        </Link>
         <Link href="/dashboard">
         <ListItem sx={{display:'flex'}}  disablePadding>
            <ListItemButton >
              <ListItemIcon color='#fff'>
              <SummarizeIcon titleAccess='report'/>
              </ListItemIcon>
              <ListItemText primary="Repoprts"/>
            </ListItemButton>
          </ListItem>
         </Link>
      </List>
      <List>
        <ListItemText primary="User" sx={{padding:" 0 10px"}}/>
      <Link href="/dashboard">
      <ListItem  disablePadding>
            <ListItemButton >
              <ListItemIcon>
              <SettingsIcon  titleAccess='report'/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>
      </Link>
    <form  action={handleSignOut}  >
      <ListItem  disablePadding>
            <ListItemButton >
              <button id='logoutBtn' style={{padding:"0",display:"flex",backgroundColor:'transparent',color:"#fff", border:"none", margin:"0"}}>
              <ListItemIcon >
              <LogoutIcon   titleAccess='Logout'/>
              </ListItemIcon>
              <ListItemText primary="Log Out"/>
              </button>
            </ListItemButton>
          </ListItem>
    </form>
      </List>
    </div>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,color:"#fff" ,backgroundColor:"#182237"},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundColor:"#182237", color:"#fff" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
        </Box>
  );
}

export default Sidebar
