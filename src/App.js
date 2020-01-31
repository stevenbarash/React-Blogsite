import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BlogPost from "./components/BlogPost/BlogPost";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function App() {
  // let query = useQuery();

  return (
    <div>
      <a href="/">
        <h1>Blog Posts.</h1>
      </a>

      <Router>
        <Switch>
          <Route path="/post/:title" component={BlogPost} />
          <Route path="/post" component={BlogPost} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
