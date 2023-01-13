import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { HelmetProvider } from "react-helmet-async";
import BlogDataContext from "./BlogDataContext";
import TopTab from "./components/Toolbar/TopTab";
import SideNavigation from "./components/NavigationHandler/SideNavigation";
import TabContext from "./contexts/TabContext";
const Home = lazy(() => import("./components/HomePage/Home"));
const Courses = lazy(() => import("./components/Courses/Courses"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Aboutus = lazy(() => import("./components/AboutUs/Aboutus"));
const Contact = lazy(() => import("./components/ContactPage/Contact"));
const Services = lazy(() => import("./components/Services/Services"));
const PageNotFound = lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);
const Blog = lazy(() => import("./components/Blog/Blog"));
// import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  const helmetContext = {};
  //for blog.json api data
  const [data, setData] = useState([]);
  const [value, setValue] = React.useState(0); //for tabs

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
    <HelmetProvider context={helmetContext}>
      {/* HelmetProvider component needs to be only imported in the root component */}
      <TabContext.Provider value={{ value: value, setValue: setValue }}>
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
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </TabContext.Provider>
    </HelmetProvider>
  );
}

export default App;
