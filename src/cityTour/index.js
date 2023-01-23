import { useState } from 'react';
import { tourData } from './TourData';
const CityTour = () => {
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle(!toggle);
    }
    return (
        <div>

            <div style={{ display: "flex", justifyContent: 'space-between', margin: '30px', backgroundColor: 'skyblue', padding: '10px 100px' }}>
                <img src='cityTour.jpg' height='100' width='100' />
                <div>Home</div>
                <div>About</div>
                <div>Tour</div>
            </div>
            <div style={{ textAlign: "center", width: "300px", margin: "20px", display: "flex" }}>
                {tourData.map((tour) => {
                    return (
                        <div key={tour.id} style={{ margin: "10px 20px", backgroundColor: "lightcyan" ,borderRadius:"10px"}}>
                            <img src={tour.img} alt="img" width="300" height="300" />
                            <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>{tour.city.toUpperCase()}</p>
                            <p style={{ fontWeight: "bold" }}>{tour.name.charAt(0).toUpperCase() + tour.name.slice(1)}</p>
                            <div style={{ display: "inline-flex" }}>
                                <p>Info:</p>
                                &nbsp;
                                <p onClick={clickHandler} style={{ cursor: "pointer", border: "transparent", height: "20px" }}><span style={{color:"blue"}}>Click Here</span></p>
                            </div>
                            {toggle && <p>{tour.info}</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CityTour;