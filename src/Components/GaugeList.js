import React from 'react'
import Gauge from './Gauge'
import { Col } from 'reactstrap';


function GaugeList(props) {
    return (
        <div>
            {
                props.gauges.map((gauge) => {
                    return (
                        <Col>
                            <Gauge
                                Variable={gauge.Variable}
                                Value={gauge.Value}
                                Max={gauge.Max}
                                Min={gauge.Min}
                                Measure={gauge.Measure}
                                MajorTicks={gauge.MajorTicks}
                                Highlights={gauge.Highlights}
                            />
                        </Col>
                    )
                })
            }
        </div>
    )
}

export default GaugeList