import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Typography, Grid ,Button} from '@mui/material';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import { useState, useEffect } from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import Navbar from '../Components/navbar';
import StudNav from '../Components/studnav';
import StudentDashboard from './dashboard';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "10px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const useStyles = makeStyles({
  link: {
    color: '#000000',
    textDecoration:"none",
    '&:hover': {
    textDecoration:"none",     
      color: '#ffffff',
      backgroundColor: '#073763',
    },
  },
});
const lnk = [
      {  icon: <BadgeIcon sx={{fontSize:"medium"}}/>, name: "NAD DigiLocker", value:"https://nad.digilocker.gov.in/"},
      {  icon:  <LibraryBooksIcon sx={{fontSize:"medium"}}/>, name: "National Digital Library", value:"https://ndl.iitkgp.ac.in/"},
      {  icon:  <CastForEducationIcon sx={{fontSize:"medium"}}/>, name: "Swayam Online Courses", value:"https://swayam.gov.in/"},
      {  icon:  <PlayLessonIcon sx={{fontSize:"medium"}}/>, name: "Spoken Tutorials", value:"https://ndl.iitkgp.ac.in/"},  
  ];
  

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function UserInfo() {
  const classes = useStyles();
  const theme = useTheme();
  const [users, setUsers] = useState([]);
  const [link, setLinks] = useState([]);
  const stud = JSON.parse(localStorage.getItem('student'));
  // console.log(stud.token);
  let token = stud.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:8080/StudentDetails', config);
        //console.log(response)
        const data = await response.json();
        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  const rows = [
    { icon: <AppRegistrationIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "CUS Registration No", value: users.regNo },
    { icon: <MicrowaveIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "Exam Roll No", value: users.rollno },
    { icon: <BadgeIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "Name", value: users.name },
    { icon: <RemoveFromQueueIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "Programmee", value: users.programme },
    { icon: <CalendarMonthIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "Date of Birth", value: users.datebirth },
    { icon: <BatchPredictionIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "Batch", value: users.batch },
    { icon: <EventRepeatIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "Current Semester", value: users.currentsem },
    { icon: <LocationCityIcon sx={{ fontSize: "large", color: "primary.main" }} />, name: "college", value: users.college },
  ];
  return (
    <> 
     <StudNav/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <Item>
            <TableContainer sx={{ maxWidth: 700 }} component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell><Typography align="center" variant="h6">STUDENT DETAIL</Typography></StyledTableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <Table aria-label="customized table">
                <TableBody>
                  {rows.map((users) => (
                    <>
                      <StyledTableRow key={users.name}>
                        <StyledTableCell component="th" scope="row">
                          {users.icon} {users.name}
                        </StyledTableCell>
                        <StyledTableCell align="left" component="th" scope="row">{users.value}</StyledTableCell>
                      </StyledTableRow>
                    </>
                  ))}
                   <Button variant='conatined'>Get NOC</Button>
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>       
          <Accordion defaultExpanded={true} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" color="#073763">Digital Initiatives</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer sx={{ maxWidth: 700 }} component={Paper}>
             <Table aria-label="customized table">
              <TableBody>
                {lnk.map((links) => (
                  <>
                    <StyledTableRow key={links.name}  >
          <Typography >
                      <StyledTableCell  component="th" scope="row" align="left">
                      <a href={links.value} underline="none" target="_blank" rel="noopener" variant="body1" > {links.icon} &nbsp;{links.name}</a>
                         </StyledTableCell>
                           </Typography>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>   
        </AccordionDetails>
      </Accordion>        
        </Grid>
      </Grid>
    </>
  );
}