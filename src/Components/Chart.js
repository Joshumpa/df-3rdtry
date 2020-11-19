import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Brush, AreaChart, Area, Legend } from 'recharts';

function Chart({ data, dataKey }) {
    return (
        <div>
            <h3> Graphic of {dataKey} variable over time </h3>
            <AreaChart width={600} height={200} data={data} syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey={dataKey} stroke='#82ca9d' fill='#82ca9d' />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <Brush />
            </AreaChart>
        </div>
    )
}

export default Chart