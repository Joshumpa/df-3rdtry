import React from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import Graphics from './Graphics'
import useFetch from '../hooks/useFetch'
import 'canvas-gauges/gauge.min.js'

const GraphicsContainer = () => {

    let tab = {
        client: "getInfo",
        server: "information",
        machine: "Molder-A04"
    }

    const { gaugeInfo, goodData, time, accumulatedData, loading, error } = useFetch(tab)

    //console.log(accumulatedData.length)

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return <Graphics
        goodData={goodData}
        gaugeInfo={gaugeInfo}
        time={time}
    />

    /* document.gauges.forEach(function (gauge) {
        console.log(gauge.type);
    }); */


}

export default GraphicsContainer

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