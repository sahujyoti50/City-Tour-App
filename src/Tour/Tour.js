import { useState } from "react";

const Tour = ({ tour,removeTour }) => {
    const [showInfo, setShowInfo] = useState(false);

    const showInfoHandler = () => {
        setShowInfo(!showInfo);
    }
   
    return (
        <article className="tour" key={tour.id}>
            <div className="img-container">
                <img src={tour.img} alt="tour pic" />
                <span className="close-btn" onClick={() => removeTour(tour)}>
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
}
export default Tour;