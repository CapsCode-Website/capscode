import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/HomePage/Home";
import Courses from "./components/Courses/Courses";
import {
  Route,
  HashRouter,
  Switch,
  Router,
  BrowserRouter,
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import TopTab from "./components/Toolbar/TopTab";
import SideNavigation from "./components/NavigationHandler/SideNavigation";
import { Hidden } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import Aboutus from "./components/AboutUs/Aboutus";
import Contact from "./components/ContactPage/Contact";
import Career from "./components/Career/Career";
import Services from "./components/Services/Services";
import Tutorial from "./components/Tutorial/Tutorial";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Blog from "./components/Blog/Blog";
import BlogCards from "./components/Career/BlogCards";
import MarkDownReaderComponent from "./components/Blog/MarkDownReaderComponent";
import BlogDataContext from "./BlogDataContext";
function App() {
  // onLeave(origin, destination, direction) {
  //   console.log("Leaving section " + origin.index);
  // }
  // afterLoad(origin, destination, direction) {
  //   console.log("After load: " + destination.index);
  // }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/CapsCode-Website/blogfiles/master/blog.json",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <CssBaseline />
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
      {/* I HAVE USED HashRouter THEN ONLY IT WORKED FINE HERE BELOW AND ASLO IN TOPTAB COMPONENT*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/course" component={Courses} />

        {/* <Route exact path="/blog" component={BlogCards} /> */}
        {/* <Route exact path="/blog/:content" component={Blog} /> */}
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/tutorials" component={Tutorial} />
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
    </>
  );

  // return(
  //   <>
  //   <CssBaseline/>
  //   <div style={{marginBottom:'60px'}}><Hidden smDown><TopTab/></Hidden></div>
  //   <div style={{marginBottom:'0px'}}><Hidden mdUp><TopSideNavigation/></Hidden></div>
  //   <HashRouter>
  //     <Route exact path='/' component={Home}/>
  //     <Route exact path='/course' component={Courses}/>
  //   </HashRouter>
  /* <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["orange", "purple", "green"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Home />
                <Link to='/'/>
              </div>
              <div className="section">
                <div className="slide">
                  <Courses />
                  <Link to='/course'/>
                </div>
                {/* <div className="slide">
                  <h3>Slide 2.2</h3>
                </div> */
}
/* <div className="slide">
                  <h3>Slide 2.3</h3>
                </div> */
/* </div>
              <div className="section">
                  <Footer />
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      /> */

export default App;
