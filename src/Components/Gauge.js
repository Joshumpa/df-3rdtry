import React from 'react'
import 'canvas-gauges/gauge.min.js'
import { Col } from 'reactstrap';

const Gauge = ( data ) => (

    <Col xs="5">
        <canvas data-type="radial-gauge"
            data-width="300"
            data-height="300"
            data-units={data.Measure}
            data-title={data.Variable}
            data-min-value={data.Min}
            data-max-value={data.Max}
            data-value="0"
            data-major-ticks={data.MajorTicks}
            data-minor-ticks="2"
            data-stroke-ticks="true"
            data-highlights={data.Highlights}
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
    </Col>
)

export default Gauge