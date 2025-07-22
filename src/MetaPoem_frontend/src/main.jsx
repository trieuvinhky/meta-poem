import React from "react";
import ReactDOM from "react-dom/client";
import { AuthClient } from "@dfinity/auth-client";
import App from "./App";

import "./index.scss";

const init = async () => {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    const internetIdentityUrl =
      process.env.DFX_NETWORK === "ic"
        ? "https://identity.ic0.app/#authorize"
        : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943`;

    await authClient.login({
      identityProvider: internetIdentityUrl,
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
    });
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

function handleAuthenticated(authClient) {
  root.render(
    <React.StrictMode>
      <App authClient={authClient} />
    </React.StrictMode>
  );
}

root.render(
  <React.StrictMode>
    <div>Loading...</div>
  </React.StrictMode>
);

init();
