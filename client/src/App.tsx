import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import "./App.css";
import { Logout } from "./pages/logout";
import { User } from "./pages/user";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:username">
            <User />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
