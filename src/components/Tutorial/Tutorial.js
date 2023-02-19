import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Loader from "../Loading/Loader";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  heroContent: {
    marginTop: "30px",
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  serviceCard: {
    transition: "0.5s",
    borderRadius: "20px",
    maxWidth: 304,
    margin: "auto",

    boxShadow: "0 8px 40px -12px rgba(0,0,0,3.3)",
    "&:hover": {
      boxShadow: "0 19px 70px -12.125px rgba(110,190,0,8.3)",
    },
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    minHeight: 150,
  },
}));

export default function Pricing() {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [MyServices, setMyServices] = useState([]);

  useEffect(() => {
    fetch("https://capscode-website.github.io/capscodefiles/Tutorials.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMyServices(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div style={{ paddingTop: "40vh" }}>
        <Loader />
        Error : {error.message} (Check Internet Connection Once)
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div style={{ paddingTop: "40vh" }}>
        <Loader /> Loading...Please wait
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="md"
          component="main"
          className={classes.heroContent}
        ></Container>
        <Container
          maxWidth="lg"
          component="main"
          style={{ minHeight: "130vh" }}
        >
          <Grid container spacing={5} alignItems="flex-end">
            {MyServices.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={6} md={3}>
                <Card className={classes.serviceCard}>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    action={<StarIcon />}
                    className={classes.cardHeader}
                    color="dark"
                  />
                  <CardContent className={classes.cardContent}>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <a
                      href={tier.link}
                      target="parent"
                      style={{ textDecoration: "none", width: "100%" }}
                    >
                      <Button
                        color="default"
                        variant={tier.buttonVariant}
                        style={{ borderRadius: "20px", width: "100%" }}
                      >
                        {tier.buttonText}
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
