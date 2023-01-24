import { useState } from 'react';
import { tourData } from './Data/TourData';
import Logo from "./Data/cityTour.jpeg";
import './App.css';
import Tour from './Tour/Tour';

const App = () => {
  const [data, setData] = useState(tourData);

  const removeTour = tours => {
    const sortedTours = data.filter((tour) => { return (tour.id !== tours.id) });
    setData(sortedTours);
  }
  return (
    <div>

      <div>

        <nav className="navbar">
          <img src={Logo} alt="logo" width="100px" height="100px" />
          <ul className="nav-links">
            <li>
              <a href="/" className="nav-link">
                home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                about
              </a>
            </li>
            <li>
              <a href="/" className="nav-link active">
                tours
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="tourlist">
        {data.map((tour) => {
          return (
            <Tour tour={tour} removeTour={removeTour} />
          )
        })}
      </div>
    </div>
  )
}
export default App;