import logo from './logo.svg';
import './App.css';
import Waypoints from './Waypoints';

function App() {
  return (
    <div className="App">

      <div className='map' id="map">
      <Waypoints></Waypoints>
      <img className='abs house' src='house.png'></img>
        <img className='abs piece' src='piece.png'></img>
        <img className='bg' src='bg_grass.jpg'></img>
      </div>
      
    </div>
  );
}

export default App;
