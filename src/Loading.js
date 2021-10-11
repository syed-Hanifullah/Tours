import React from "react";
import * as ReactBootstrap from "react-bootstrap";
const Loading = () => {
  return (
    <div className="loading">
      <ReactBootstrap.Spinner
        animation="border"
        variant="primary"
      />
    </div>
  );
};

export default Loading;
