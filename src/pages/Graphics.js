import React, { Fragment } from 'react'
import Goods from '../Components/Goods'
import GaugeList from '../Components/GaugeList'

const Graphics = ({data}) => (
    <Fragment>
        <Goods 
            goods={data[1]}
        />
        <GaugeList 
            info={data[0]}
        />
    </Fragment>
)

export default Graphics