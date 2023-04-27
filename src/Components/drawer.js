import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SchoolIcon from '@mui/icons-material/School';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useHistory } from "react-router-dom";
const DrawerComp=()=>{
const history=useHistory();
const [open,setOpen] = useState(false)
    return(
        <>
        <Drawer PaperProps={{
            sx:{backgroundColor:"#ffffff"}}} anchor="left" open={open} onClose={()=>setOpen(false)}>
            <List>
                <ListItemButton divider onClick={()=>history.push("/StudentLogin")}>
                    <ListItemIcon  sx={{color:'#073763'}}  >
                     <SchoolIcon/>
                     </ListItemIcon>
                        <ListItemText sx={{color:'#073763'}}> Student Login</ListItemText>                    
                </ListItemButton>
                <ListItemButton onClick={()=>setOpen(false)} divider> 
                    <ListItemIcon  sx={{color:'#073763'}}>
                     <AdminPanelSettingsIcon />
                     </ListItemIcon>
                        <ListItemText sx={{color:'#073763'}}> Admin Login</ListItemText> 
                     </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={()=>setOpen(!open)}  sx={{color:'#ffffff'}}>
        <MenuRoundedIcon/>
        </IconButton>
        </>
    )
}
export default DrawerComp;




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import DragHandleIcon from '@mui/icons-material/DragHandle';
// import SchoolIcon from '@mui/icons-material/School';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List sx={{color:"#073763"}}>
//         {['Student Login', 'Admin Login'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton divider> 
//               <ListItemIcon sx={{color:"#073763"}}>
//                 {index % 2 === 0 ? <SchoolIcon /> : <AdminPanelSettingsIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
    
//     </Box>
//   );

//   return (
//     <div>
//       {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <DragHandleIcon sx={{color:"white"}} onClick={toggleDrawer(anchor, true)}/>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }