import { useState } from 'react';
import { tourData } from './Data/TourData';
import Logo from "./cityTour.jpeg";
import './cityTour.css';

const CityTour = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [data,setData]=useState(tourData)
    const showInfoHandler = () => {
        setShowInfo(!showInfo);
    }
    const removeTour = id => {
        const sortedTours = tourData.filter(tour => tour.id !== id);
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
                        <article className="tour">
                            <div className="img-container">
                                <img src={tour.img} alt="tour pic" />
                                <span className="close-btn" onClick={() => removeTour(tour.id)}>
                                    <i className="fas fa-window-close" />
                                </span>
                            </div>
                            <div className="tour-info">
                                <h3>{tour.city}</h3>
                                <h4>{tour.name}</h4>
                                <h5>
                                    info
                                    <span onClick={showInfoHandler}>
                                        <i className="fas fa-caret-square-down" />
                                    </span>
                                </h5>
                                {showInfo && <p>{tour.info}</p>}
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default CityTour;