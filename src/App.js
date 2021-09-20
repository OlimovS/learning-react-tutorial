import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MakePost from "./pages/MakePost";
import OnePostView from "./pages/OnePostView";
import Posts from "./pages/posts";

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/make-post">Make</Link>
      </p>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/post/:id">
          <OnePostView />
        </Route>
        <Route path="/make-post">
          <MakePost />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
