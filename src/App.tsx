//// @flow 
import * as React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import MainPage from './pages/mainPage';

type Props = {
    
};
 const App = (props: Props) => {
    return (
  
      <Router>
      <Switch>
        <Route exact path="/index">
          <MainPage/>
        </Route>
        <Route exact path="/">
        <MainPage/>
        </Route>
        <Route>
         <NotFound/>
        </Route>
      </Switch>
    </Router>
        
    );
};
export default App;