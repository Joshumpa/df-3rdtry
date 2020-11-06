import React, { Fragment } from 'react'
import Gauge from './Gauge'
//import { Col } from 'reactstrap';


const GaugeList = ({info}) => (
    <Fragment>
        { info?.map((gauge) => (
            <Gauge
                key = {gauge.Variable}
                {...gauge}
            />
        ))}
    </Fragment>
)

export default GaugeList