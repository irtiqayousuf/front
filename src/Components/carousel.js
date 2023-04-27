import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

  button: {
    textAlign:'center',
    justifyContent: 'center',
    alignItems:'center',
    padding:"20px",
 },

}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://www.gcwmaroad.edu.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.85c4e417.jpg&w=1200&q=75',
      
  },
  {
    imgPath:
      'https://www.gcwmaroad.edu.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.dcb4b1cd.jpg&w=1200&q=75',
  },
  {
    imgPath:
      'https://www.gcwmaroad.edu.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.a62f7ee2.jpg&w=1200&q=75',
     
  },
];

const steps = [
  { description:"Get Your NOC" ,
  },
  {    
    description:"We make it easy for you",
  },
  {
    description: "One Simple Step to Apply",
  },
];

const buttn = [
  {  path:"/Instructions",
     description:"Check Instructions" ,
  },
  {    
    path:"/StudentLogin",
    description:"Apply Now",
  },
  {
    path:"/Status",
    description: "Check Status",
  },
];

function Carousel() {
  const classes = useStyles({ });
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1600, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.text}>
            {Math.abs(activeStep - index) <= 2 ? (
             <Box sx={{ position: 'relative' }}>
               <Box 
                component="img"
                sx={{
                  marginTop: "auto",
                  height: 730,
                  display: 'block',
                  maxWidth: 1600,
                  overflow: 'hidden',
                  width: '100%',
                  [theme.breakpoints.down("sm")]: {
                    display: "flex",
                    maxWidth: 598,
                    height:530,
                    '@media (min-width:600px)': {
                      fontSize: '1.5rem',
                    },
                  },
                  [theme.typography.h4] : {
                    fontSize: '1.2rem',
                    '@media (min-width:600px)': {
                      fontSize: '1.5rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '2.4rem',
                    },
                  },
                }}          
                src={step.imgPath}        
                /> 
                <Box sx={{
        position: 'absolute',
        bottom: 250,
        left: 0,
        right:0,
        width: 'auto',
        bgcolor: 'rgb(0, 0, 36, 0.4)',
        color: 'white',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}>
        <Typography variant='h4' sx={{textAlign:"center"}}>{steps[activeStep].description}</Typography>
        <Box className={classes.button}>
        <Link key={index} to={buttn[activeStep].path}> <Button variant="contained" sx={{textAlign:"center"}}>{buttn[activeStep].description}</Button></Link>
        </Box>
                </Box>
              </Box>
                ) : null}
      
          </div>
            
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* Next */}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {/* Back */}
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;