import React from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import Graphics from './Graphics'
import useFetch from '../hooks/useFetch'
import 'canvas-gauges/gauge.min.js'

const GraphicsContainer = () => {
    let events = {
        client: "getInfo",
        server: "information"
    }

    const { data, loading, error } = useFetch(events)

    //console.log(data)

    /* document.gauges.forEach(function (gauge) {
        console.log(gauge.type);
    }); */

    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <Graphics
        data={data}            
    />
    
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