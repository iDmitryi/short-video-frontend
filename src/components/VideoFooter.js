// import { MusicNote } from "@mui/icons-material/MusicNote";
import { MusicNote } from "@mui/icons-material";
import Ticker from "react-ticker";
import "./VideoFooter.css";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@iDmitryi</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>I'm a Linux PC</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="video footer"
      />
    </div>
  );
};

export default VideoFooter;
