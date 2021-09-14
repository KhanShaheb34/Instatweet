import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <h1>Hello</h1>
    </ChakraProvider>
  );
}

export default App;
