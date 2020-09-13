import React from 'react';
import { BrowserRouter  , Switch , Route} from 'react-router-dom';
import './App.css';


import Login from './pages/login/login';
import Admin from './pages/admin/admin';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" component = { Login }/>
        <Route path = "/Admin" component = { Admin }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
