import { useState } from "react";
import data from "./data";
import "./styles.css";

function AccordianComponent() {
  const [selected, setSelected] = useState(null);
  const [multipleAcc, setMultipleAcc] = useState([]);
  const [enableMultiple, setEnableMultiple] = useState(false);

  function handleSingleSelection(selectedItemId) {
    setSelected(selectedItemId === selected ? null : selectedItemId);
  }

  function handleMultiSelection(selectedItemId) {
    let cpyOfArray = [...multipleAcc];

    let findIndexOfCurrentSelected = cpyOfArray.indexOf(selectedItemId);

    console.log(findIndexOfCurrentSelected);

    if (findIndexOfCurrentSelected === -1) cpyOfArray.push(selectedItemId);
    else cpyOfArray.splice(findIndexOfCurrentSelected, 1);

    setMultipleAcc(cpyOfArray);

    console.log(cpyOfArray);
  }

  function randomStuff(number) {
    return Math.floor(Math.random() * number);
  }

  console.log(randomStuff(3));
  console.log(randomStuff(5));

  return (
    <div>
      <div className="wrapper">
        <button onClick={() => setEnableMultiple(!enableMultiple)}>
          {enableMultiple === false
            ? "Enable MultiSelection"
            : "Enable SingleSelection"}
        </button>
        {data && data.length > 0
          ? data.map((singleItem) => (
              <div key={singleItem.id}>
                <div className="AccContainer">
                  <h2
                    onClick={
                      enableMultiple
                        ? () => handleMultiSelection(singleItem.id)
                        : () => handleSingleSelection(singleItem.id)
                    }
                  >
                    {singleItem.question}
                  </h2>
                  <span>+</span>
                </div>
                <div className="Accanswer">
                  {selected === singleItem.id ||
                  multipleAcc.indexOf(singleItem.id) !== -1 ? (
                    <div>{singleItem.answer}</div>
                  ) : null}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default AccordianComponent;
