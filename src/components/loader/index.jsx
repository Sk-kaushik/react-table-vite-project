import React from "react";
import FullScreen from "../../layout/fullscreen";
import "./styles.scss";

const Loader = (props) => {
  const { fullscreen } = props;

  return (
    <>
      {fullscreen ? (
        <FullScreen>
          <LoaderSpinner />
        </FullScreen>
      ) : (
        <LoaderSpinner />
      )}
    </>
  );
};

const LoaderSpinner = () => {
  return (
    <div className="loader-container">
      <div className="loadingio-spinner-ellipsis-yaqr5y2jvhn">
        <div className="ldio-1l2jq96tu0m">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
