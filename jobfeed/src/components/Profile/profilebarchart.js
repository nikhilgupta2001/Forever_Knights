import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

var data = [
 
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';
  constructor(props){
    super(props)
  }

  render() {
    const arr=this.props.info;
   var arrfinal = [];
   var date = arr[arr.length-1].date;
   var ct = 0;
    for(let i=arr.length-1;i>=0;i--)
    {
      //console.log(arr[i].date === date);
        if(arr[i].date === date)
        {
          ct++;
        }
        else{
          
          arrfinal.push({"name":arr[i+1].date,"videoWatched":ct});
          ct = 1;
        }
        if(i == 0)
        {
          arrfinal.push({"name":arr[0].date,"videoWatched":ct});
        }
 
    }
    console.log(arrfinal);
    var t = arrfinal.slice(0,7);
    console.log(t);
    data = t;
    console.log(data);
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
          <Bar dataKey="videoWatched" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="videoWatched" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
