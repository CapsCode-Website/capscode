import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/HomePage/Home";
import Courses from "./components/Courses/Courses";
import { Route, Switch } from "react-router-dom";
import TopTab from "./components/Toolbar/TopTab";
import SideNavigation from "./components/NavigationHandler/SideNavigation";
import { Hidden } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/AboutUs/Aboutus";
import Contact from "./components/ContactPage/Contact";
import Services from "./components/Services/Services";
import Tutorial from "./components/Tutorial/Tutorial";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Blog from "./components/Blog/Blog";
import BlogDataContext from "./BlogDataContext";
import { HelmetProvider } from "react-helmet-async";
function App() {
  //for blog.json api data
  const [data, setData] = useState([]);

  //calling blog.json api so that we can make the route based on the data and urls.
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/CapsCode-Website/blogfiles/master/blog.json",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <HelmetProvider>
      {/* HelmetProvider component needs to be only imported in the root component */}
      <div>
        <Hidden smDown>
          <TopTab />
        </Hidden>
      </div>
      <div>
        <Hidden mdUp>
          <SideNavigation />
        </Hidden>
      </div>
      {/* I HAVE USED HashRouter THEN ONLY IT WORKED FINE HERE BELOW AND ALSO IN TOPTAB COMPONENT*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/course" component={Courses} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        {/* <Route exact path="/tutorials" component={Tutorial} /> */}
        {/* Passing blog.json data to all the below routes and creating the routes as well and passing the markdown url as props */}
        <BlogDataContext.Provider value={data}>
          <Route
            exact
            path="/blog"
            render={(props) => <Blog link="home" {...props} />}
          />
          <Route
            exact
            path="/blog/home"
            render={(props) => <Blog link="home" {...props} />}
          />
          {data.map((routeData, index) =>
            routeData.children.map((routes, routesIndex) => (
              <Route
                key={routesIndex}
                exact
                path={`/blog/${routes.routeName}`}
                render={(props) => (
                  <Blog
                    link={routes.link}
                    like={routes.like}
                    heart={routes.heart}
                    title={routes.title}
                    shortTitle={routes.smallTextHint}
                    {...props}
                  />
                )}
              />
            ))
          )}
        </BlogDataContext.Provider>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
