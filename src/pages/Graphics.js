import React, { Fragment } from 'react'
import Status from '../Components/Status'
import GaugeList from '../Components/GaugeList'

const Graphics = ({  goodData, time, gaugeInfo }) => (
    <Fragment>
        <div className="row status">
            <Status
                good={goodData}
                time={time}
            />
        </div>
        {/* <div className="row bgGrey title-good "> <h3>Graphic representation of Variables</h3> </div> */}
        <div className="row">
            <GaugeList
                info={gaugeInfo}
            />
        </div>
    </Fragment>
)

export default Graphics