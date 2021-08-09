import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUsPage from './components/About-Us-Page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Scrolltotop from './components/Scroll-to-top';
import ServicesPage from './components/Services-Page';
import PortfolioPage from './components/Portfolio-Page';
import ContactPage from './components/Contact-Page';
function App() {
  return (
    <React.Fragment>
      <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUsPage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
      </Router>
      <Footer />
      <Scrolltotop />
    </React.Fragment>
  );
}
export default App;
