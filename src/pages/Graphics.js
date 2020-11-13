import React, { Fragment } from 'react'
import Status from '../Components/Status'
import GaugeList from '../Components/GaugeList'
import { Row } from 'reactstrap'
//import '../Components/styles/styles.css'

const Graphics = ({ data }) => (
    <Fragment>
        <Row>
            <Status
                good={data.good}
                time={data.time}
            />
        </Row>
        <Row>
            <GaugeList
                info={data.info}
            />
        </Row>
    </Fragment>
)

export default Graphics