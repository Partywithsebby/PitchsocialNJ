// Replace everything in App.jsx with this
import './index.css';

function App() {
  return (
    <div>
      <nav>
        <a href="#">Menu</a>
        <a href="#">Private Events</a>
        <a href="#">Who We Are</a>
        <a href="#">Location</a>
      </nav>

      <div className="container">
        <h1 className="hero">Pitch Social</h1>
        <p className="subheading">
          An upscale, minimalist college bar where vibes meet pitchers.
        </p>
      </div>
    </div>
  );
}

export default App;

