import React from "react";

const Default = ({ location }) => (
  <div className="container">
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h1>Error</h1>
        <h1 className="display-3">404</h1>
        <h2>Page Not Found</h2>
        <h3>
          The requested URL
          <span className="text-danger">{location.pathname}</span> was not found
        </h3>
      </div>
    </div>
  </div>
);

export default Default;
