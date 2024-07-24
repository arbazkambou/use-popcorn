import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RatingStars from "./RatingStars";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RatingStars
      maxRating={5}
      color={"#fcc419"}
      size={48}
      //message={["Very bad", "Bad", "Ok", "Good", "Amazing"]}
    />
    <RatingStars
      maxRating={5}
      color={"purple"}
      size={48}
      message={["Very bad", "Bad", "Ok", "Good", "Amazing"]}
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
