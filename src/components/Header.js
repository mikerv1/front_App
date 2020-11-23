import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link,
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import { HeaderContext } from "../context/context";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link as MaterialLink } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../store/actions/userActions'
import {sections} from "../context/context" //передача массива меню
import { routes } from "../context/context"
import { useHistory } from "react-router-dom";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  buttonsSign: {
    marginLeft: 5,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    outline: "none",
    textDecoration: "none",
    color: "black"
  },
  iconContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  iconButton: {
    float: "right",
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  links: {
    outline: "none",
    textDecoration: "none",
  }
}));

export default function Header(location) {
  const classes = useStyles();
  const theme = useTheme();
  const [menuDrawer, setMenuDrawer] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {loading, error, userInfo } = userLogin;

  const mobileMenuOpen = () => {
    setMenuDrawer(true);
  };

  const mobileMenuClose = () => {
    setMenuDrawer(false);
  };
// const sections = section
  // console.log(sections)
  // const { sections, featuredPosts } = useContext(HeaderContext);

  const logoutHendler = () => {
    // e.preventDefault()
    dispatch(logout())
    }
  
    let history = useHistory();

    // useEffect(() => {
    //   if (history) {
    //     console.log('userLogin_2', userLogin)
    //     history.push("/")
    //   }
    // }, [history, userInfo])

    console.log(history.location.pathname)

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {/* {history.location.pathname == "/" ? ("Main") : (history.location.pathname)} */}
          {/* {sections[0].title} */}
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
         { userInfo ? (
          //  <Link className={classes.links} to="/login">
           <Button className={classes.buttonsSign}
              variant="outlined"
              size="small" 
              onClick={logoutHendler}>
             Log out
           </Button>
          //  </Link>
         ) : (
          <>
            <Link className={classes.links} to="/signup">
              <Button className={classes.buttonsSign} variant="outlined" size="small">
                Sign up
              </Button>
            </Link>
            <Link className={classes.links} to="/login">
              <Button className={classes.buttonsSign} variant="outlined" size="small">
                Sign in
              </Button>
            </Link>
          </>
         )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {routes.map((route, index) => (
          <Link
            // color="inherit"
            // noWrap
            key={index}
            variant="body2"
            href={route.path}
            to={route.path}
            className={classes.toolbarLink}
          >
            {route.title}
            {/* {section.title} */}
          </Link>
        ))}
      </Toolbar>
      <div className={classes.iconContainer}>
        <IconButton
          onClick={mobileMenuOpen}
          className={classes.iconButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.tabContainer}>
        <SwipeableDrawer
          anchor="right"
          open={menuDrawer}
          onClose={mobileMenuClose}
          onOpen={mobileMenuOpen}
          classes={{
            paper: classes.drawerPaper, //look Panel for add width
          }}
        >
          <AppBar title="Menu" />
          <div className={classes.drawerHeader}>
            <IconButton onClick={mobileMenuClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          {/* <List>
            {routes.map((route, index) => (
              
              <ListItem
              
                component={route.title ? MaterialLink : Link}
                href={route.path ? route.path : null}
                to={
                  route.path
                    ? null
                    : {
                        pathname: route.path,
                        // search: this.props.location.search
                      }
                }
                button
                key={route.title}
              >
                {route.title}
              
              </ListItem>
              
            ))}
          </List> */}
          {routes.map((route, index) => (
          <Link
            // color="inherit"
            // noWrap
            key={index}
            variant="body2"
            href={route.path}
            to={route.path}
            className={classes.toolbarLink}
          >
            {route.title}
            {/* {section.title} */}
          </Link>
        ))}
        </SwipeableDrawer>
      </div>
    </>
  );
}

Header.propTypes = {
  routes: PropTypes.array
};
