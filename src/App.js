import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import OnePostView from "./pages/OnePostView";
import Posts from "./pages/posts";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/post/:id">
          <OnePostView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
