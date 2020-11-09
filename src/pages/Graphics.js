import React, { Fragment } from 'react'
import Goods from '../Components/Goods'
import GaugeList from '../Components/GaugeList'
import { Row } from 'reactstrap'

const Graphics = ({ data }) => (
    <Fragment>
            <Row>
                <Goods
                    goods={data["good"]}
                />
            </Row>
            <Row>
                <GaugeList
                    info={data["info"]}
                />
            </Row>
    </Fragment>
)

export default Graphics