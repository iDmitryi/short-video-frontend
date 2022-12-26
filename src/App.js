import { useEffect, useState } from "react";
import axios from "./components/axios";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/v2/posts");
      setVideos(res.data);
      return res;
    }

    fetchData();
  });

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (
            { url, channel, description, likes, messages, song, shares },
            index
          ) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              likes={likes}
              messages={messages}
              shares={shares}
              song={song}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
