import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette:{
        primary:{
            main:"#073763"
        }
    },
    background: {
        default:"linear-gradient(90deg, rgba(36,28,0,1) 0%, rgba(121,82,9,1) 35%, rgba(0,212,255,1) 100%);"
    },
    colors: {
        base1: "black", // deep green backgrounf [navbar, about , contact]
        base2: "black", //white
        primary2 :"black",
      },
})

export default theme;