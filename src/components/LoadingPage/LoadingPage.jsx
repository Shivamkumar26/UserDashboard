import React from "react";
import "./LoadingPage.css"
import { ProgressBar } from "react-loader-spinner"; 

const LoadingPage = () => {
  return (
    <div className="loading">
      <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="grey"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      barColor="grey"
      borderColor="#5A5A5A"
      />
      {" "}
      <span className="loading-text">
        Please Wait
      </span>
    </div>
  );
};

export default LoadingPage;