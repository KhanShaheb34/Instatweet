import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
