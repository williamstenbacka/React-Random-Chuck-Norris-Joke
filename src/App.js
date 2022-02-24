import './App.css';
import useFetch from "./useFetch";

function App() {
  const { data: joke, loading, error} = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  if (loading) return <h1> Loading...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
        <div>
          <h1>
            {joke?.value}
          </h1>
        </div>
    </div>
  );
}

export default App;