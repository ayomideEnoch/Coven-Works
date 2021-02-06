/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Modal } from '@material-ui/core';

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226");
      res
        .json()
        .then(res => setAirports(res.states))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={5}>
        {airports.map(cols => (
          <Grid item xs={6} sm={3} onClick={handleOpen}>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Airport Images"
                height="140"
                image=""
                title="Airport Images"
              />
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
          <h1>Hello World</h1>
          <button type="button" onClick={handleClose}>
            Close Modal
          </button>
       </div>
      </Modal>
    </> 
  )
}

export default HomePage;
