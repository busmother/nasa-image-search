import NavBar from './components/NavBar'
import SearchContainer from './containers/SearchContainer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar color='black' title='Nasa Image Search'/>
      <SearchContainer />
    </div>
  );
}

export default App;
