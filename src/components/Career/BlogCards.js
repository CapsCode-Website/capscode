import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: '0vw',
    height: "28vh",
    margin: "20px",
    borderRadius: "10px",
    background: "linear-gradient(-121deg,  #fdfbfb 0%,#eaedee 100%)",
    opacity: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
  },
  avatar: {
    backgroundColor: "#FEF3F4",
    color: "#000000",
  },
}));

export default function BlogCards({ data, page, setPage, setSelectedIndex }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          fontWeight: "650px",
          fontSize: "2em",
          paddingTop: "30px",
        }}
      >
        CapsCode Blog's
      </div>
      {data.map((b, i) => {
        return (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {/* {i == data.length - 1 ? setPage(1) : null} */}
            <NavLink
              to={`/blog/${b.routeName}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.root}>
                <CardHeader
                  style={{ height: "70px", fontWeight: "300px" }}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {Array.from(b.title)[0]}
                    </Avatar>
                  }
                  // action={
                  //     <IconButton aria-label="settings">
                  //         <MoreVertIcon />
                  //     </IconButton>
                  // }
                  title={
                    <span style={{ fontWeight: "600", fontSize: "1.3em" }}>
                      {b.title}
                    </span>
                  }
                  // subheader="September 14, 2016"
                />
                {/* <CardMedia
                  className={classes.media}
                  image={b.coverImage}
                  title="CapsCode Blog"
                /> */}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {b.smallTextHint}
                  </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                <div style={{ textAlign: "right", paddingRight: "10px" }}>
                  Read More ➜
                </div>
              </Card>
              {/* </a> */}
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
}
