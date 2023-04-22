import ReactDOM from "react-dom";

// INSERT CHILD IN MODAL ROOT DOM NODE
export default function Portal(props) {
  return ReactDOM.createPortal(props.children, document.querySelector("#modal-root"));
}
