
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BroswerRouter>
        <nav>
          <Link>Home</Link>
          <Link>Chi Siamo</Link>
          <Link>Cat1</Link>
          <Link>Cat2</Link>
        </nav>
      </BroswerRouter>
        <Switch>
          <Route path="/" exact>
            {/* home */}
          </Route>
          <Route path="">
            {/* chi siamo */}
          </Route>
          <Route path="">
            {/* cat1 */}
          </Route>
          <Route path="">
            {/* cat2 */}
          </Route>
        </Switch>
    </div>
  );
}

export default App;
