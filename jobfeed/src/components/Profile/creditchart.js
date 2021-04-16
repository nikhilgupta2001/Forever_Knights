import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    Credits: 'Day-1',
    amount: 4000,
    amt: 2400,
  },
  {
    Credits: 'Day-2',
    amount: 3000,
    amt: 2210,
  },
  {
    Credits: 'Day-3',
    amount: 2000,
    amt: 2290,
  },
  {
    Credits: 'Day-4',
    amount: 2780,
    amt: 2000,
  },
  {
    Credits: 'Day-5',
    amount: 1890,
    amt: 2181,
  },
  {
    Credits: 'Day-6',
    amount: 2390,
    amt: 2500,
  },
  {
    Credits: 'Day-7',
    amount: 3490,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Credits" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
