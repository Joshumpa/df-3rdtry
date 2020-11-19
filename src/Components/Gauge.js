//import React from 'react'
import 'canvas-gauges/gauge.min.js'

function Gauge({ Variable, Max, Min, Measure, MajorTicks, NotSat, Value }) {

    return (
        <canvas data-type="radial-gauge"
            data-width="224" //14rem
            data-height="224"
            data-units={Measure}
            data-title={Variable}
            data-min-value="0"
            data-max-value={Max}
            data-value={Value}
            data-major-ticks={MajorTicks}
            data-minor-ticks="2"
            data-stroke-ticks="true"
            data-highlights={`[
                    {"from": 0, "to": ${NotSat}, "color": "rgba(200, 50, 50, .75)"},
                    {"from": ${NotSat}, "to": ${Min}, "color": "rgba(200, 200, 50, .75)"}
                ]`}
            data-color-plate="#fff"
            data-border-shadow-width="0"
            data-borders="false"
            data-needle-type="arrow"
            data-needle-width="2"
            data-needle-circle-size="7"
            data-needle-circle-outer="true"
            data-needle-circle-inner="false"
            data-animation-duration="1500"
            data-animation-rule="linear"
        ></canvas>
    )
}

export default Gauge
