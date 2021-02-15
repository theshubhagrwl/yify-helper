import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "300px",
    margin: "1vh",
  },
  media: {
    height: "50vh",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const MovieCard = ({ title, year, rating, cover }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia className={classes.media} image={cover} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {rating}
          </Typography>
        </CardContent>
      </div>
      <CardActions className={classes.flexCenter}>
        <Button size="small" color="primary">
          1080p
        </Button>
        <Button size="small" color="primary">
          720p
        </Button>
      </CardActions>
    </Card>
  );
};
export default MovieCard;
