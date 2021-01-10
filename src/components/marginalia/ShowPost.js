import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../store/marginaliaStore/store";
import { getPost } from "../../store/marginaliaStore/actions";
import Header from "../Header";
import StickyFooter from "../StickyFooter";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Sidebar from "./Sidebar";
import { sidebar } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  topGrid: {
    flexWrap: "wrap",
    marginTop: theme.spacing(15),
  },  
}));

export default function ShowPost(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(PostsContext);
  const post = useParams();

  console.log(post.post);
  console.log("state", state);

  useEffect(() => {
    if (!!post) {
      dispatch(getPost(post.post));
    }
  }, []);
  
  return (
    <>
      <Header />
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.topGrid}>
          <Grid item xs={12} md={10}>
            <Typography variant="h6" gutterBottom>
              !{state.post.title}
            </Typography>
            <Divider />!{state.post.description}
          </Grid>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <StickyFooter />
    </>
  );
}
