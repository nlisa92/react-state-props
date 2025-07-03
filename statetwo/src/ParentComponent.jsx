import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

function ParentComponent() {
  const [state, setState] = useState(0);

  return (
    <>
      <h2>Счетчик: {state} </h2>
      <button onClick={() => setState(state + 1)}>Увеличить</button>
      <button onClick={() => setState(0)}>Сбросить</button>
      <button onClick={() => setState(Math.floor(Math.random() * 10) + 1)}>
        Случайное значение
      </button>
      <button onClick={() => state > 0 && setState(state - 1)}>
        Уменьшить
      </button>
      <ChildComponent name="Anna" state={state} />
      <SiblingComponent />
    </>
  );
}

export default ParentComponent;
