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
import UserInfo from "./userinfo";
import { Link } from 'react-router-dom';
import StudNav from "../Components/studnav";

const useStyles = makeStyles((theme) => ({
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

}));

const drawerWidth = 240;



const StudentDashboard = () => {
       
  return (
    <>
    <StudNav/>
   <Box sx={{ display: 'flex' }}>
     
        <Toolbar />
        <UserInfo/>
        
      </Box>

    </>
  );
};

export default StudentDashboard;