import Video from "./components/Video";
import "./App.css";
import VideoFooter from "./components/VideoFooter";
import VideoSidebar from "./components/VideoSidebar";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <VideoFooter />
        <VideoSidebar />
      </div>
    </div>
  );
}

export default App;
