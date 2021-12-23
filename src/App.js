import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Portfolio, Digital, SmallPrint, LargePrint } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
          <Route path="/digital" exact component={() => <Digital />} />
          <Route path="/smallprint" exact component={() => <SmallPrint />} />
          <Route path="/largeprint" exact component={() => <LargePrint />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;