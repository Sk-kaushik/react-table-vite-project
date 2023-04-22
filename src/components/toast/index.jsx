import React, { useEffect, useState } from "react";
import Portal from "../portal";
import "./styles.scss";

const Toast = (props) => {
  const [show, changeShow] = useState(true);
  const { message = "", variant = "success", time = 3000 } = props;

  useEffect(() => {
    let timeout = setTimeout(() => {
      changeShow(false);
    }, time);

    return () => clearTimeout(timeout);
  }, []);

  const hide = () => {
    changeShow(false);
  };

  return (
    <>
      {show ? (
        <Portal>
          <div className={`toast-container ${variant}`}>
            <div>{message}</div>
            <span className="cross" onClick={hide}>
              X
            </span>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

export default Toast;
