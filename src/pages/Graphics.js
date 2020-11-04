import React, { Fragment } from 'react'
import Goods from '../Components/Goods'
import GaugeList from '../Components/GaugeList'

const Exercises = ({data}) => (
    <Fragment>
        <Goods 
            goods={data.good}
        />
        <GaugeList 
            exercises={data.info}
        />
    </Fragment>
)

export default Exercises