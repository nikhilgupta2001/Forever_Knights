import React, { PureComponent } from 'react';
import { toast } from 'react-toastify';
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
import history from '../../redux/actions/history';

var data = [
 
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';
  constructor(props){
    super(props)
  }

  render() {
    const arr=this.props.info;
    // console.log(arr.length);
    if(arr.length==0)
    {
      toast.dark('Watch Some adds to have stats')
      history.push('/adds');
      window.location.reload(true);

    }
   var arrfinal = [];
   
   var date=arr[arr.length-1].date;
   var ct = 0;
    for(let i=arr.length-1;i>=0;i--)
    {
    console.log(arr[i].date === date ,"33");
    
        if(arr[i].date == date)
        {
          console.log(ct,' Line NO 35');
          ct++;
        }
        else{
          console.log(ct);
          console.log(40);
          arrfinal.push({"name":arr[i+1].date,"videoWatched":ct});
          date=arr[i].date;
          ct = 1;
        }
         if(i == 0)
        {
          arrfinal.push({"name":arr[0].date,"videoWatched":ct});
        }
 
    }
    console.log(arrfinal);
    var t = arrfinal.slice(0,7);
    var p = arrfinal.reverse();
    console.log(t);
    data = p;
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
