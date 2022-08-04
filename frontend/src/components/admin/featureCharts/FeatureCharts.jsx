import React from 'react'
import './FeatureCharts.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import 'react-circular-progressbar/dist/styles.css'
import CircleIcon from '@mui/icons-material/Circle'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrders} from "../../../features/adminAuth/AdminSlice"
import { useEffect } from 'react'



const COLORS = ['#FF8042', '#0088FE']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
function FeatureCharts() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getAllOrders())
  },[])
  const {orders}=useSelector((state)=>state.adminAuth)
  const success = orders.filter((data)=>data.isPaid)
  const pending = orders.filter((data)=>!data.isPaid)
  const data = [
  { name: 'Pending', value: pending.length },
  { name: 'Success', value:success.length },
]
  return (
    <div className="featured">
      <div className="top primary-Color">
        <h2 className="title">
          <CurrencyRupeeIcon />
          Payment Details
        </h2>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="d-flex ">
          <p className="title ">
            <span style={{ color: '#FF8042', fontSize: '7px' }}>
              <CircleIcon />
            </span>
            Pending
          </p>
          <p className="title ">
            <span style={{ color: '#0088FE', fontSize: '7px' }}>
              <CircleIcon />
            </span>
            Success
          </p>
        </div>
        {data.map((data, index) => (
          <p className="title">
            <span style={{ fontSize: '20px' }}>{data.name} :</span>
            {data.value}Nos
          </p>
        ))}
      </div>
    </div>
  )
}

export default FeatureCharts
