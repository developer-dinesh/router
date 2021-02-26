import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';



const App = () => {

  const Name = () => {
    return <h1>Hello, Iam Name page</h1>;
  };

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route path='/Contact/Name' component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;


