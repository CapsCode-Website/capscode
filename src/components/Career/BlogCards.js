import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: '0vw',
    minHeight: "28vh",
    margin: "20px",
    borderRadius: "10px",
    background: "white",
    // background: "linear-gradient(-121deg,  #fdfbfb 0%,#eaedee 100%)",
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
        CapsCode Blogs
      </div>
      {data.map((b, i) => {
        return (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <NavLink
              to={`/blog/${b.routeName}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.root}>
                <CardHeader
                  style={{ minHeight: "70px", fontWeight: "300px" }}
                  avatar={
                    <Avatar
                      aria-label="capscode-team-avatar"
                      className={classes.avatar}
                    >
                      {Array.from(b.title)[0]}
                    </Avatar>
                  }
                  title={
                    <span style={{ fontWeight: "600", fontSize: "25px" }}>
                      {b.title}
                    </span>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {b.smallTextHint}
                  </Typography>
                </CardContent>
                <div
                  style={{
                    textAlign: "right",
                    paddingRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      background: "#FEF3F4",
                      padding: "4px 7px 4px 7px",
                      borderRadius: "5px",
                    }}
                  >
                    Read More ➜{" "}
                  </span>
                </div>
              </Card>
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
}
