import { useEffect, useState } from "react";

function NewFollowerAlert() {
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    alert(`You have ${followers} followers now!`);
  }, [followers]); // Runs when followers changes

  return (
    <button onClick={() => setFollowers(f => f + 1)}>
      Follow (+1)
    </button>
  );
}


