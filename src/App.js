import logo from './logo.svg';
import './App.css';

import Login from './Login';
import Home from './Home';
import Register from './Register';
import {
 BrowserRouter,
 Switch,
 Route,
 Link
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact    >
        <Login></Login>
        </Route>
        <Route path='/register' >
        <Register></Register>
        </Route>
        <Route path='/home' >
        <Home></Home>
        </Route>
      </Switch>
      <Link to="/register">hihihi</Link>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
