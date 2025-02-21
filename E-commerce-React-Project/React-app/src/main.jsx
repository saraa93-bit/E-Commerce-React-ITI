import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux"; // استخدم Provider
import store from "./Redux/store"; // تأكد من استيراد store
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* غلف الـ App بـ Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
