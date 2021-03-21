import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Destination from './components/Destination/Destination';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contracts from './components/Contracts/Contracts';

export const transportContext = createContext() // contains transport that is clicked
export const emailContext = createContext();  // contains emails that will be given by user 
export const routeContext = createContext();  // contains route details

function App() {
  const [transport, setTransport] = useState({})
  const [email, setEmail] = useState('');
  const [routeDetails, setRouteDetails] = useState({});
  return (
    <transportContext.Provider value = {[transport, setTransport]}>
     <emailContext.Provider value={[email,setEmail]}>
        <routeContext.Provider value={[routeDetails, setRouteDetails]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route path="/home">
                <Home></Home>
              
              </Route>
              <Route exact path="/">
                <Home></Home>
               
              </Route>
              <PrivateRoute path="/destination">
                <Destination></Destination>
              </PrivateRoute>
              <PrivateRoute path="/destination/:type">
                <Destination></Destination>
              </PrivateRoute>
              <Route path="/:type/details">
                <DestinationDetails></DestinationDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/contract">
                <Contracts></Contracts>
              </Route>
            </Switch>
          </Router>
        </routeContext.Provider>
     </emailContext.Provider>
    </transportContext.Provider>
  );
}

export default App;
