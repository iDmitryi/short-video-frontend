import { MusicNote } from "../../node_modules/@mui/icons-material/index";
// import Ticker from "../../node_modules/react-ticker/types/index";
import "./VideoFooter.css";

const VideoFooter = ({ chanel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{chanel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker> */}
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
