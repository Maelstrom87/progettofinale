import './App.css';
import Home from './components/Home';
import FullArticle from './components/FullArticle';
import NavBar from './components/NavBar';
import DynamicPage from './components/DynamicPage';
import Header from './components/Header';
// import NotFound from './components/NotFound';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id" exact>
            <FullArticle />
          </Route>
          <Route path="/categories/:cat/name/:name" >
            <Home />
          </Route>
          <Route path="/page/:slug" >
            <DynamicPage />
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
