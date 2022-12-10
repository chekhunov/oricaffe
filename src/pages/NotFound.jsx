import React from "react";

import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="error">
      <div className="container">
        <div className="error__inner d-flex flex-column align-center">
          <span className="title">404</span>
          <p className="subtitle">If there is coffee, there is a way</p>
          <p className="text">
            Sorry, we couldn’t fins this page. But don’t worry, you can find
            plenty of other things on our
          </p>
          <a href="/" className="error__link">
            homepage.
          </a>
        </div>
      </div>
    </div>
  );
}
