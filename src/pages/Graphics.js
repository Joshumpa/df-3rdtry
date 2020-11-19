import React, { Fragment } from 'react'
import Status from '../Components/Status'
import GaugeList from '../Components/GaugeList'
//import '../Components/styles/styles.css'

const Graphics = ({  gaugeInfo, time, goodData }) => (
    <Fragment>
        <div className="row status">
            <Status
                good={goodData}
                time={time}
            />
        </div>
        <div className="row">
            <GaugeList
                info={gaugeInfo}
            />
        </div>
    </Fragment>
)

export default Graphics