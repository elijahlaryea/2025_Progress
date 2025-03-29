import ModalMain from "./modal-main.jsx";
import "./modal.css";

function ModalComponent({ header, body, footer, onClose }) {
  return (
    <div className="wrapper">
      <div className="header">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{header ? header : <div>Modal Header</div>}</h2>
      </div>
      <div>{body ? body : <h3>Modal Body</h3>}</div>
      <div>{footer ? footer : <h4>Footer goes here</h4>}</div>
    </div>
  );
}

export default ModalComponent;
