import React, { Fragment } from 'react'
import Gauge from './Gauge'


const GaugeList = ({gaugeInfo}) => (
    <Fragment>
        { gaugeInfo?.map((gauge) => (
            <Gauge
                key = {gauge.Variable}
                {...gauge}
            />
        ))}
    </Fragment>
)

export default GaugeList