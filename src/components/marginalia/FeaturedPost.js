import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

import Button from "@material-ui/core/Button";
import { useRouteMatch, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  links: {
    outline: "none",
    textDecoration: "none",
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  let { path, url } = useRouteMatch();
  const history = useHistory();

  console.log("history", history);
  const showPost = (e) => {
    e.preventDefault();
    console.log("history", history);
    history.push(`${url}/` + post.id);
  };

  console.log(post.id);

  return (
    <Grid item xs={12} md={5}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
              <Button variant="contained" size="small" onClick={showPost}>
                ShowPost
              </Button>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
