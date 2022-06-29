import React from 'react'
import "./Charts.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Charts() {

  const data = [
    {
      name: 'category 1',
      Trainers: 24,
      amt: 2400,
    },
    {
      name: 'category 2',
      Trainers: 13,
      amt: 2210,
    },
    {
      name: 'category 3',
      Trainers: 98,
      amt: 2290,
    },
    {
      name: 'category 4',
      Trainers: 39,
      amt: 2000,
    },
    {
      name: 'category 5',
      Trainers: 48,
      amt: 2181,
    },
    {
      name: 'category 6',
      Trainers: 38,
      amt: 2500,
    },
    {
      name: 'Others',
      Trainers: 43,
      amt: 2100,
    },
  ];
  return (
    <div className='chart'>
      <div className="title primary-Color">category and Trainers</div>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <BarChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Trainers" fill="rgb(11, 137, 195)" background={{ fill: '#eee' }} />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts