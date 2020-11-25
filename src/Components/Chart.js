import React, { Fragment } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

function Chart({ data }) {
    return (
        <Fragment>
            <AreaChart width={250} height={150} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" tick="|" /> */}
                <YAxis type="number" tick="|" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type='monotone' dataKey="Cycle" stroke='#EA8300' fill='#EA8300' />
                {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
            </AreaChart>
            <AreaChart width={250} height={150} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type='monotone' dataKey="InjTime" stroke='#4A4F55' fill='#4A4F55' />
            </AreaChart>
            <AreaChart width={250} height={150} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type='monotone' dataKey="MCushion" stroke='#EA8300' fill='#EA8300' />
            </AreaChart>
            <AreaChart width={250} height={150} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type='monotone' dataKey="PeakPrs" stroke='#4A4F55' fill='#4A4F55' />
            </AreaChart>
            <AreaChart width={250} height={150} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type='monotone' dataKey="RecovTime" stroke='#EA8300' fill='#EA8300' />
            </AreaChart>
        </Fragment>
    )
}

export default Chart