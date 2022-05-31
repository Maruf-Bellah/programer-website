
import React, { createContext } from 'react';
import './Cart.css'
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis,stroke, PieChart, Pie, CartesianAxis, AreaChart, ReferenceLine, Area } from 'recharts';
import { Col, Row } from 'react-bootstrap';


const Cart = () => {
     const data = [
          {
              "month": "Mar",
              "investment": 100000,
              "sell": 241,
              "revenue": 10401
          },
          {
              "month": "Apr",
              "investment": 200000,
              "sell": 423,
              "revenue": 24500
          },
          {
              "month": "May",
              "investment": 500000,
              "sell": 726,
              "revenue": 67010
          },
          {
              "month": "Jun",
              "investment": 500000,
              "sell": 529,
              "revenue": 40405
          },
          {
              "month": "Jul",
              "investment": 600000,
              "sell": 601,
              "revenue": 50900
          },
          {
              "month": "Aug",
              "investment": 700000,
              "sell": 670,
              "revenue": 61000
          }
      ];
       return (
         <div className='cart pt-5 mt-5 '>
             <div>
                 <h5>Month Wise Sell</h5>
             <LineChart width={500} height={250}  data={data}>  
                    <Line dataKey={'sell'} ></Line>
                    <XAxis dataKey={'month'} ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
            </LineChart>
             </div>
             <div >
                 <h5>Investment Vs Revenue</h5>
            <AreaChart width={500} height={250}  data={data}>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis ></YAxis>
                    <ReferenceLine  stroke="green"></ReferenceLine>
                    <ReferenceLine  stroke='red' strokeDasharray="3 3"/>
                    <ReferenceLine label="Segment"  />
                    <Tooltip></Tooltip>
                    <Line dataKey={"investment"}></Line>
                    <Area type={"monotone"} dataKey="revenue" stroke="blue"></Area>
             </AreaChart>
            </div>
            <div>
            <h5>Investment Vs Revenue</h5>
                <BarChart width={500} height={250} data={data}>
                    <XAxis dataKey={'month'}></XAxis>
                    <CartesianGrid strokeDasharray="5 3" />
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                 
                    <Bar dataKey="revenue" ></Bar>   
                    <Bar dataKey="investment"  background='red'></Bar>
                </BarChart>
            </div>
            <div>
            <h5>Investment Vs Revenue</h5>
                <LineChart fill='gray' width={550} height={250} data={data}>
                    <Line type="monotone" fill='gray' dataKey={'investment'}   stroke="#8884d8" />
                    <CartesianGrid  ></CartesianGrid>
                    <XAxis dataKey={'month'  } fill='gray' stroke="#8884d8"></XAxis >
                    <YAxis  fill='gray'></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
         </div>


        
     );
};

export default Cart; 