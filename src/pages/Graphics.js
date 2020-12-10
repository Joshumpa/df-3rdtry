import React, { Fragment } from 'react'
import Status from '../Components/Status'
import GaugeList from '../Components/GaugeList'
import Chart from '../Components/Chart'

const Graphics = ({ machine, goodData, time, gaugeInfo, accumulatedData }) => (
    <Fragment>
        <div className="row status">
            <Status
                title={machine}
                good={goodData}
            />
        </div>
        <div className="row bgGrey section-title"> <h1>Lastest Update: <b>{time}</b></h1> </div>
        <div className="row">
            <GaugeList
                info={gaugeInfo}
            />
        </div>
        <div className="row margin-bottom">
            <Chart
                data={accumulatedData}
            />
        </div>
    </Fragment>
)

export default Graphics