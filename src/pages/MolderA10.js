import React from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import Graphics from './Graphics'
import useFetch from '../hooks/useFetch'
import 'canvas-gauges/gauge.min.js'

const MolderA10 = () => {
    
    const machine = "Molder-A10"
    const server = "Molder-A04"
    const { gaugeInfo, goodData, time, accumulatedData, loading, error } = useFetch(server)

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return <Graphics
        goodData={goodData}
        gaugeInfo={gaugeInfo}
        time={time}
        machine={machine}
        accumulatedData={accumulatedData}
    />

}

export default MolderA10