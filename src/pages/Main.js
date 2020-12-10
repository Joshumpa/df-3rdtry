import React from 'react'
import image from '../images/fanuc-molding-machine.jpg'

const Main = () => (
    <div className="col">
        <div className="col bgOrange center main-title">
            <p>Molding Area L30 Industrial</p>
            <h3>Blvd Industrial Norte #23 <br /> Hermosillo, Son.</h3>
        </div>
        <div className="row description margin-bottom">
            <div className="desc-img">
                <img src={image} alt="Fanuc Molding Machine"></img>
            </div>
            <div className="desc-txt bgDarkGrey center">
                <p>Monitoring of injection <br /> process variables in <br /> molding machines</p>
            </div>
        </div>
    </div>
)

export default Main