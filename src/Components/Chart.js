import React, { Fragment } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Brush, AreaChart, Area, Legend } from 'recharts';

function Chart({ data }) {
    return (
        <Fragment>
            <AreaChart width={600} height={250} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey="Cycle" stroke='#EA8300' fill='#EA8300' />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </AreaChart>
            <AreaChart width={600} height={250} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey="InjTime" stroke='#4A4F55' fill='#4A4F55' />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </AreaChart>
            <AreaChart width={600} height={250} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey="MCushion" stroke='#4A4F55' fill='#4A4F55' />
                <Legend width={120} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </AreaChart>
            <AreaChart width={600} height={250} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey="PeakPrs" stroke='#EA8300' fill='#EA8300' />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </AreaChart>
            <AreaChart width={600} height={250} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey="RecovTime" stroke='#EA8300' fill='#EA8300' />
                <Legend width={150} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </AreaChart>
        </Fragment>
    )
}

export default Chart