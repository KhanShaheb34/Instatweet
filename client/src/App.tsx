import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import "./App.css";
import { Logout } from "./pages/logout";

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
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
