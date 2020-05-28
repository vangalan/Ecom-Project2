import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/home/Home';
import ContactPage from './pages/contact/Contact';
import ProductsPage from './pages/products/Products'
import './App.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <div>
      <Router>

        {/* Navigation */}
        <header>
          <nav id="navbar">
            <div className="container">
              <h1 className="logo"><a href={"/"}>Tearing Jerkies</a></h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </Router>

      {/* Footer */}

      <footer id="main-footer">
        <nav id="footer-nav">
          <ul>
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/products"}>Product</a></li>
            <li><a href={"/contact"}>Contact</a></li>
          </ul>
        </nav>


        <figure class="icons">
          <div class="icon-container">
            <a href="https://www.facebook.com" target="_blank" rel="noopener"
            ><img
                src="https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
                alt="facebook-logo"
              /></a>
            <a href="www.twitter.com" target="_blank" rel="noopener"
            ><img
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png"
                alt="twitter-logo"
              /></a>
            <a href="www.instagram.com" target="_blank" rel="noopener"
            ><img
                src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png"
                alt="insta-logo"
              /></a>
          </div>
        </figure>
        <p>AV &copy; 2020, All Rights Reserved</p>

      </footer>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.


