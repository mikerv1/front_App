import React from "react";
import { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import { usePostsStore } from '../../store/marginaliaStore/store'
import Header from "../Header";
import Sidebar from "../marginalia/Sidebar"
import FeaturedPost from "../marginalia/FeaturedPost"
import StickyFooter from "../StickyFooter"
import {loadPosts} from "../../store/marginaliaStore/actions"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function RenderContent() {
  const classes = useStyles();

const [state, dispatch] = usePostsStore();

console.log("statePosts", state.loaded)
console.log("dispatchStore", typeof dispatch)
console.log("loadPosts", loadPosts)

useEffect(() => {
 if (!state.loaded) {
   console.log('!state.loaded')
   dispatch(loadPosts())
 }
}, [state])

// console.log("statePosts", state)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header /> */}
        <main>
          <Grid container spacing={4}>
            {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/* <StickyFooter /> */}
      </>
  );
}

const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
    //   { title: 'March 2020', url: '#' },
    //   { title: 'February 2020', url: '#' },
    //   { title: 'January 2020', url: '#' },
    //   { title: 'November 1999', url: '#' },
    //   { title: 'October 1999', url: '#' },
    //   { title: 'September 1999', url: '#' },
    //   { title: 'August 1999', url: '#' },
    //   { title: 'July 1999', url: '#' },
    //   { title: 'June 1999', url: '#' },
    //   { title: 'May 1999', url: '#' },
    //   { title: 'April 1999', url: '#' },
    ],
    social: [
    //   { name: 'GitHub', icon: GitHubIcon },
    //   { name: 'Twitter', icon: TwitterIcon },
    //   { name: 'Facebook', icon: FacebookIcon },
    ],
  };

// const posts = [post1, post2, post3];