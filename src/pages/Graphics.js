import React, { Fragment } from 'react'
import Goods from '../Components/Goods'
import GaugeList from '../Components/GaugeList'

const Graphics = (data) => (
    <Fragment>
        <Goods 
            goods={data.good}
        />
        <GaugeList 
            info={data.info}
        />
    </Fragment>
)

export default Graphics