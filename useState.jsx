import { useState } from "react";

function TipJar() {
  const [tips, setTips] = useState(0); // Our tip jar starts with 0 <- initial value

  return (
    <div>
      <h2>Tip Jar: ${tips}</h2>
      <button onClick={() => setTips(tips + 1)}>💵 Add $1 Tip</button>
    </div>
  );
}

export default TipJar;
