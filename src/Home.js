// import React from "react";
// import {
//   alpha,
//   AppBar,
//   Box,
//   Button,
//   InputBase,
//   Toolbar,
//   Typography,
//   useTheme,
//   useMediaQuery
// } from "@mui/material";
// import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
// import { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import DrawerComp from "./Student/drawer";
// import Carousel from "./Student/carousel";

// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   logoLg: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   logoSm: {
//     display: "block",
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   // search: {
//   //   display: "flex",
//   //   alignItems: "center",
//   //   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   //   "&:hover": {
//   //     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   //   },
//   //   borderRadius: theme.shape.borderRadius,
//   //   width: "50%",
//   //   [theme.breakpoints.down("sm")]: {
//   //     display: (props) => (props.open ? "flex" : "none"),
//   //     width: "70%",
//   //   },
//   // },
//   // input: {
//   //   color: "white",
//   //   marginLeft: theme.spacing(1),
//   // },
//   // cancel: {
//   //   [theme.breakpoints.up("sm")]: {
//   //     display: "none",
//   //   },
//   // },
//   // searchButton: {
//   //   marginRight: theme.spacing(2),
//   //   [theme.breakpoints.up("sm")]: {
//   //     display: "none",
//   //   },
//   // },
//   // icons: {
//   //   alignItems: "center",
//   //   display: (props) => (props.open ? "none" : "flex"),
//   // },
//   // badge: {
//   //   marginRight: theme.spacing(2),
//   // },
// }));

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const classes = useStyles({ open });
//   const theme = useTheme();
//   console.log(theme);
//   const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
//   console.log(isMatched);
//   return (
//     <>
//     <AppBar position="fixed">
//       <Toolbar className={classes.toolbar}>
//         {isMatched ? (<>
//           <Typography variant="h6" className={classes.logoSm}>
//             OWC
//           </Typography>
//           <DrawerComp />
//         </>) : (<>
//           <Typography variant="h6" className={classes.logoLg}>
//             One Window Clearance
//           </Typography>
//           <Box display="flex">
//             <Button sx={{ marginLeft: "auto" }} variant="Contained">Student Login</Button>
//             <Button sx={{ marginLeft: 1 }} variant="Contained">Admin Login</Button>
//           </Box>
//         </>)}
//       </Toolbar>
//     </AppBar>
//     <Carousel/>
//     </>
//   );
// };

// export default Home;
import React from "react";
import Carousel from './Components/carousel';
import Navbar from './Components/navbar';



const Home = () => {
  return (
    <>
   <Navbar/>
   <Carousel/>
    </>
  );
};

export default Home;