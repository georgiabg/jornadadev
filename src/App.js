import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={100}
          name="Geórgia"
          description="Hatuna Matata"
          music="musica epica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
        />
        <Video
          likes={100}
          messages={200}
          shares={100}          
          name="Carlos"
          description="Hey Cat"
          music="show"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
