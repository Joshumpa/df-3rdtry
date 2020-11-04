import React, { Fragment } from 'react'
import Gauge from './Gauge'
//import { Col } from 'reactstrap';


const GaugeList = (info) => {
    <Fragment>
        { info.map((gauge) => (
            <Gauge
                key = {gauge.id}
                {...gauge}
            />
        ))}
    </Fragment>
}

export default GaugeList