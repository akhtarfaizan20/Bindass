import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Auth0Provider
        domain="dev-p4gpobrbvueo252s.us.auth0.com"
        clientId="YRR9Y8oPHHYvatnvigjwRSeifDNCV63B"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </ChakraProvider>
  </BrowserRouter>
);
