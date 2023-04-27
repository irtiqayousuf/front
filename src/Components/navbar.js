import React from "react";
import {Stack} from "@mui/material";
import {
  alpha,
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import DrawerComp from "./drawer";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const history=useHistory();
const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const theme = useTheme();
  console.log(theme);
  const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatched);

  // const isLoggedIn = () => {
  // const loggedIn = localStorage.getItem("student");
  // if (loggedIn === null || loggedIn === undefined) {
  //   return false;
  // }
  // return loggedIn === "true";
  // }
//   const isLoggedIn = () => {
//   console.log("checking")
//   if(!localStorage.getItem("student")){
//     return false;
//   }else{
//       return true;
//   }
// }
const isLoggedIn =localStorage.getItem("student");
const logOut=()=> {
  localStorage.clear();
  history.push('/')
}
  return ( 
   <>
     <AppBar position="fixed">
       <Toolbar className={classes.toolbar}>
         {isMatched ? (<>
           <Typography variant="h6" className={classes.logoSm}>
             OWC
           </Typography>
           <DrawerComp />
         </>) : (<>
           <Typography variant="h6" className={classes.logoLg}>
             One Window Clearance
           </Typography>
           {isLoggedIn ?
            (
             <Button sx={{ marginLeft: 1 }} variant="Contained" onClick={logOut} >LOG OUT</Button>  
            ):(
              <Box display="flex">
              <Button sx={{ marginLeft: "auto" }} variant="Contained" onClick={()=>history.push("/StudentLogin")}>Student Login</Button>
              <Button sx={{ marginLeft: 1 }} variant="Contained" onClick={()=>history.push("/instructions")}>Admin Login</Button>              
            </Box>          
           )}
         </>)}
       </Toolbar>
     </AppBar>
    </>
  );
};

export default Navbar;