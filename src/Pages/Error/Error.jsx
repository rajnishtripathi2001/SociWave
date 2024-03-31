import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <div className="errp">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="Sorry, the page you're looking for doesn't exist."
        />
      </Helmet>
      <div className="error-page">
        <div className="content">
          <h1 data-text="404">404</h1>
          <h4 data-text="Opps! Page Not Found">Opps! Page Not Found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem.
          </p>
          <div className="btns">
            <Link to="/">Return to Homepage</Link>
            <Link to="/report">Report a Problem</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}