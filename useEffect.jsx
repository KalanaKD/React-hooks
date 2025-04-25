import { useEffect, useState } from "react";

function NewFollowerAlert() {
  // This component will alert the user when they get a new follower
  // It uses the useEffect hook to run a side effect when the followers state changes
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


