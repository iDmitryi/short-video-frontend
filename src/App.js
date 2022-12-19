import Video from "./components/Video";
import "./App.css";
import VideoFooter from "./components/VideoFooter";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <VideoFooter />
      </div>
    </div>
  );
}

export default App;
