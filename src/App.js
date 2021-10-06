import './App.css';
import Home from './components/Home';
import FullArticle from './components/FullArticle';
// import NotFound from './components/NotFound';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <span><Link to="/">Home </Link></span>
      <span><Link to="/add">| Add Artist </Link></span>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id">
            <FullArticle />
          </Route>
          {/*
          <Route path="/artists/:id">
            <Add  />
          </Route>
          <Route path="*">
            <NotFound  />
          </Route> */}
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
