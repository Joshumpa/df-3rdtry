import React from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import Graphics from './Graphics'
import useFetch from '../hooks/useFetch'
import 'canvas-gauges/gauge.min.js'

const MolderA10 = () => {
    
    const machine = "Molder-A04"
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

//console.log(accumulatedData.length)
/* document.gauges.forEach(function (gauge) {
    console.log(gauge.type);
}); */

/*

var timers = [];

function animateGauges() {
    document.gauges.forEach(function(gauge) {
        timers.push(setInterval(function() {
            gauge.value = Math.random() *
                (gauge.options.maxValue - gauge.options.minValue) +
                gauge.options.minValue;
        }, gauge.animation.duration + 50));
    });
}

*/