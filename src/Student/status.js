import {Box,Grid,Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Navbar from '../Components/navbar';
import Divider from '@mui/material/Divider';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { useHistory } from 'react-router-dom';
import StudNav from '../Components/studnav';

const useStyles = makeStyles((theme) => ({
    gridbox: {
        display: "block",
        justifyContent: "center",
        alignItems:"center",
        marginTop:"0px",
      },
      inst:{
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
      },
    instbox: {
      justifyContent: "center",
      alignItems:"center",
      padding:"60px",
      marginTop:"10px",
      border:"solid 1px #073763",
    },
    button: {
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
        padding:"20px",

     },
     text:{
        color:"#073763",
     },
   
  }));

export default function Status() {
    const classes = useStyles({ });
    const history=useHistory();
    
  return (
    <>
    <StudNav/>
    <Grid container spacing={2} className={classes.gridbox}>
    <Box sx={{ width: '100%', maxWidth: 500 }} className={classes.instbox}>
    <Box className={classes.inst}>
      <Typography variant="h5" fontWeight="bold" gutterBottom className={classes.text}>
      <LabelImportantIcon/>  Status
      </Typography>
      </Box>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Divider/><br/>
      <Typography variant="body1" gutterBottom>
      <LibraryAddCheckIcon  sx={{ color: '#073763', paddingTop:"4px",fontSize:"medium" }}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>  <Divider/><br/>
      <Box className={classes.button}>
      <Button variant="contained"  onClick={()=>{history.push('/studentLogin')}}>Apply Now</Button>
    </Box>
    </Box>
    </Grid>
    </>
  );
}