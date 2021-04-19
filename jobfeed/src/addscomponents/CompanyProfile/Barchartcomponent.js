import axios from 'axios';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Line,ComposedChart} from 'recharts';

var op = [

];

var arr = [];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';
constructor(props)
{
  super(props);
}
  render() {
    op = this.props.array;
    console.log(op);
    op.reverse();
     var data = op.slice(0,5)
    console.log(data)
    
    return (
      <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="views" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
    );
  }
}
