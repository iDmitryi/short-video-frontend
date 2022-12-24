import { useState } from "react";
import {
  Favorite,
  FavoriteBorder,
  Message,
  Share,
} from "../../node_modules/@mui/icons-material/index";
import "./VideoSidebar.css";

const VideoSidebar = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <>
          {liked ? (
            <Favorite fontSize="large" onClick={(e) => setLiked(false)} />
          ) : (
            <FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
          )}
          <p>{liked ? 101 : 100}</p>
        </>
      </div>
      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>345</p>
      </div>
      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>109</p>
      </div>
    </div>
  );
};
export default VideoSidebar;
