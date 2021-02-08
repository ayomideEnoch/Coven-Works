/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea,  CardContent, Typography, Grid, Modal } from '@material-ui/core';
// import './App.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomePage = () => {
  const [hasError, setErrors] = useState(false);
  const [airports, setAirports] = useState([]);
  const [clickedCountry, setClickedCountry] = useState([]);
  const [open, setOpen] = React.useState(false);
  
  const allCountry = []
  for (var i = 0; i < airports.length; i++) {
    let allAirport = airports[i].[2];
    allCountry.push(allAirport)
  } 

  const uniqueCountry = [...new Set(allCountry)];
  // console.log(allCountry)
  // console.log(uniqueCountry)

  // const clickCountry = [];
  // const modalData = [];
  // let test = allCountry.filter(function (country) {
  //   return country.types.includes("")
  // })

  
  function handleOpen(cols) {
    setOpen(true);
    let country = cols
    setClickedCountry(country) 
    // clickedCountry.push(country)
  }

  // const handleOpen = () => {
  //   setOpen(true);
  //   console.log("kii")
  // };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226");
      res
        .json()
        .then(res => setAirports(res.states.slice(0, 10)))
        .catch(err => setErrors(err));
    }

    fetchData(); 
  },
  []
  );
  
  
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={5}>
        {airports.slice(0, 10).map(cols => (
          <Grid item xs={6} sm={3} onClick={() => handleOpen(cols)}>
            <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {cols[2]}
                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       <div>
       <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h6"m={0.5} component="h6">
                  <p><b>Departing flights:</b> No longer available </p> 
                  <p><b>Arriving flights:</b>  No longer available </p> 

                  <p><b>Flight info for {clickedCountry.[2]} </b> </p>
                   <p>ICAO number: {clickedCountry.[0]}</p>
                   <p>Longitude: {clickedCountry.[5]}</p>
                   <p>Latitude: {clickedCountry.[6]}</p>
                   <p>Velocity: {clickedCountry.[9]}</p>
                   <p>Altitude: {clickedCountry.[13]}</p>

                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <button type="button" onClick={handleClose}>
            Close Modal
          </button>
       </div>
      </Modal>
    </> 
  )
}

export default HomePage;
