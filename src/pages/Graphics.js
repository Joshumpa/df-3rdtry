import React, { Fragment } from 'react'
import Status from '../Components/Status'
import GaugeList from '../Components/GaugeList'
//import '../Components/styles/styles.css'

const Graphics = ({  gInfo, time, goodData }) => (
    <Fragment>
        <div className="row status">
            <Status
                good={goodData}
                time={time}
            />
        </div>
        <div className="row">
            <GaugeList
                info={gInfo}
            />
        </div>
    </Fragment>
)

export default Graphics