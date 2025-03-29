import { useState } from "react";
import ModalComponent from "./modal-component.jsx";

function ModalMain() {
  const [showModalComponent, setShowModalComponent] = useState(false);

  function handleToggleModal() {
    setShowModalComponent(!showModalComponent);
  }

  function onClose() {
    setShowModalComponent(false);
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Component</button>
      {showModalComponent && (
        <ModalComponent onClose={onClose} header="" footer="" body="" />
      )}
    </div>
  );
}

export default ModalMain;
