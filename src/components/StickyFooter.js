import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[50]
  },
  footer: {
    // display: "flex",
    // flexDirection: "column",
    // minHeight: "100hv",
    padding: theme.spacing(1, 1),
    // marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <>
      {/* <div className={classes.root}> */}
        <CssBaseline />
        {/* <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation> */}
        {/* <div className={{ width: '100%' }}> 
          <Box display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          mx="auto"
          color="primary.main"
          >
            <Box >
              <RestoreIcon />
            </Box>
            <Box >
              <FavoriteIcon />
            </Box>
            <Box >
              <LocationOnIcon />
            </Box>        
          </Box>
        </div> */}
        <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <RestoreIcon />
          </Grid>
          <Grid item>
            <FavoriteIcon />
          </Grid>
          <Grid item>
            <LocationOnIcon />
          </Grid>
        </Grid>
        <footer className={classes.footer}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body1">
                My sticky footer can be found here.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Copyright />
            </Grid>
          </Grid>
        </footer>
      {/* </div> */}
    </>
  );
}
