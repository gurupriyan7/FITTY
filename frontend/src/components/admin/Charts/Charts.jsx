import React from 'react'
import "./Charts.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getCategory} from "../../../features/adminAuth/AdminSlice"
function Charts() {
  const dispatch = useDispatch()
  const {category}=useSelector((state)=>state.adminAuth)
 useEffect(()=>{
dispatch(getCategory())
 },[])
 
  const data = [
    {
      name: 'Fittness',
      Trainers:category.fittness,
      amt: 2400,
    },
    {
      name: 'Stamina',
      Trainers: category.stamina,
      amt: 2210,
    },
    {
      name: 'Yoga',
      Trainers: category.yoga,
      amt: 2290,
    },
    {
      name: 'Dietitian',
      Trainers: category.Dietitian,
      amt: 2000,
    },
    {
      name: 'Nutritian',
      Trainers: category.Nutrition,
      amt: 2181,
    },
    {
      name: 'Others',
      Trainers: category.other,
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