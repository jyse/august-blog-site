import "./App.css";
import Blog from "./Blog";
import Header from "./Header";

function App() {
  let shows = ["Squid Games", "Stranger Things", "Twin Peaks"];

  return (
    <div className="app">
      <Header />
      <div className="container">
        {shows.map((show) => {
          return <Blog title={show} />;
        })}
      </div>
    </div>
  );
}

export default App;
