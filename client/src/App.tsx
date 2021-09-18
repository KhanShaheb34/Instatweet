import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
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
