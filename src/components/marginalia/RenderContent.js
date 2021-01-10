import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { PostsContext } from "../../store/marginaliaStore/store";
import FeaturedPost from "../marginalia/FeaturedPost";
import { getPosts } from "../../store/marginaliaStore/actions";
import Sidebar from "./Sidebar";
import { sidebar } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  topGrid: {
    flexWrap: "wrap",
    marginTop: theme.spacing(15),
  },
}));

export default function RenderContent() {
  const classes = useStyles();

  const { state, dispatch } = useContext(PostsContext);

  useEffect(() => {
    if (!state.loading) {
      dispatch(getPosts);
    }
  }, []);

  const featuredPosts = state.posts;

  console.log("statePostsAll", state);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={2} className={classes.topGrid}>
            {featuredPosts.map((post, idx) => (
              <FeaturedPost key={idx} post={post} />
            ))}

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </>
  );
}
