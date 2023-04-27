import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PrintIcon from '@mui/icons-material/Print';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

}));

const drawerWidth = 240;
const data = [
    { name: "Profile", icon: <Person2Icon/> , to: 'StudentDashboard' },
    { name: "Status", icon:  <MilitaryTechIcon />,  to: 'Status' },
    { name: "Print NOC", icon:  <PrintIcon />,  to: 'instructions' },
  ];
  
const StudNav = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history=useHistory();
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const logOut=()=> {
      localStorage.clear();
      history.push('/')
    }
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {data.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => history.push(`/${item.to}`)}>
                <ListItemIcon sx={{color: '#073763',}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{color:"#073763", fontWeight:"20px"}}/>
                {/* <Link to={item.to} sx={{textDecoration:"none", fontWeight:"20px"}}><ListItemText primary={item.name}/></Link> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles({ });
    
  return (
    <>
   <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            STUDENT DASHBOARD
          </Typography>
        <Button variant="contained"  className={classes.buttonLg} onClick={logOut}>Logout</Button>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />        
      </Box>
    </Box>
    </>
  );
};

export default StudNav;