import "../stylesheets/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import About from "./About";
import Child from "./Child";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola Mundo <FontAwesomeIcon icon={faHeart} className="App-icon" />
        </p>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link to={`./child/${id}`}>Child 3</Link>
          </li>
        </ul>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/child/:id" component={Child} />
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;
