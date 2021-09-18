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
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
