import { useState } from "react";

function SiblingComponent({}) {
  const [text, setText] = useState("текст");
  return (
    <>
      <p>Текущий текст: {text}</p>
      <button onClick={() => setText("REDEV")}>Изменить текст</button>
    </>
  );
}

export default SiblingComponent;
