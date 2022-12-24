import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel={"iDmitryi"}
          description="Mackbook Air"
          likes={345}
          shares={200}
          messages={90}
          song="song"
          key={"a"}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel={"iDmitryi"}
          description="Mackbook Air"
          likes={345}
          shares={200}
          messages={90}
          song="song"
          key={"b"}
        />
      </div>
    </div>
  );
}

export default App;
