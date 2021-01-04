import React, { useContext } from "react";
import { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import { PostsContext } from '../../store/marginaliaStore/store'
import Sidebar from "../marginalia/Sidebar"
import FeaturedPost from "../marginalia/FeaturedPost"
import { getPosts } from "../../store/marginaliaStore/actions"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  topGrid: {
    marginTop: theme.spacing(12),
  },
}));

export default function RenderContent() {
  const classes = useStyles();

const { state, dispatch } = useContext(PostsContext)
// const [posts, setPosts] = useState({
//   posts: [],
//   post: false
// })

useEffect(() => {
  if (!state.loaded) {
    dispatch(getPosts)
  }
}, [])

const featuredPosts = state.posts

//console.log("statePosts1", featuredPosts)
console.log("statePostsAll", state)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4} className={classes.topGrid}>
            {featuredPosts.map((post, idx) => (
              // console.log("FeaturedPost", post.id)
              <FeaturedPost key={idx} post={post} dispatch={dispatch} />
            )
            )
          }
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            {featuredPosts.map((post, idx) => (
              <FeaturedPost key={idx} post={post} />
            ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
    </>
  );
}

const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };
