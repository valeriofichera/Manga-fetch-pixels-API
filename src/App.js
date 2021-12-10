import React, { useState, useEffect } from "react";

import "./styles.css";

function App() {
  const [Manga, setManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.waifu.pics/sfw/waifu")
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setManga(json.url);
      })
      .catch(() => console.log("request failed"));
  }, []);

  return (
    <div className="App">
      <div className="Pokemon">
        <img alt="Manga" src="https://i.waifu.pics/BpVeHaZ.jpg" />
      </div>
    </div>
  );
}

export default App;
