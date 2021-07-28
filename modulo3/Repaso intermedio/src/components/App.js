import ClubList from "./ClubList";
import data from "../data/clubs.json";
import "../stylesheets/App.css";

function App() {
  return (
    <>
      <h1>Mis clubs favoritos</h1>
      <ClubList list={data} />
    </>
  );
}

export default App;
