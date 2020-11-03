import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
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

import {sections} from "../context/context" //передача массива меню

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

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [menuDrawer, setMenuDrawer] = useState(false);

  const mobileMenuOpen = () => {
    setMenuDrawer(true);
  };

  const mobileMenuClose = () => {
    setMenuDrawer(false);
  };
// const sections = section
  // console.log(sections)
  // const { sections, featuredPosts } = useContext(HeaderContext);

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
          {sections[0].title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <Button className={classes.buttonsSign} variant="outlined" size="small">
          Sign up
        </Button>
        <Link className={classes.links} to="/login">
        <Button className={classes.buttonsSign} variant="outlined" size="small">
          Sign in
        </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            // color="inherit"
            // noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
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
          <List>
            {sections.map((section, index) => (
              <ListItem
                component={section.title ? MaterialLink : Link}
                href={section.title ? section.url : null}
                to={
                  section.title
                    ? null
                    : {
                        pathname: section.url,
                        // search: this.props.location.search
                      }
                }
                button
                key={section.title}
              >
                {section.title}
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </div>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array
};
