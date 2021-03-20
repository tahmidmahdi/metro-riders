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

export const transportContext = createContext()
export const emailContext = createContext();

function App() {
  const [transport, setTransport] = useState({})
  const [email, setEmail] = useState('');
  return (
    <transportContext.Provider value = {[transport, setTransport]}>
     <emailContext.Provider value={[email,setEmail]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
              {/* <Header></Header> */}
            </Route>
            <Route exact path="/">
              <Home></Home>
              {/* <Header></Header> */}
            </Route>
            <PrivateRoute path="/destination/:type">
              
              <Destination></Destination>
            </PrivateRoute>
            <Route path="/:type/details">
              <DestinationDetails></DestinationDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
     </emailContext.Provider>
    </transportContext.Provider>
  );
}

export default App;
