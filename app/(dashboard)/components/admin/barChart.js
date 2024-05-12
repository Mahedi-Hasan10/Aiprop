'use client'
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { data } from 'autoprefixer';
import { plugin } from 'postcss';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const BarChart = () => {
    const [chartData, setChartData] =useState({
      datasets:[],
    })
    const [chartOption, setChartOption] =useState({})
    useEffect(()=>{
      setChartData({
        labels: ["Plumbing", "Electrician", "Handy Man", "Natural Gas"],
        datasets: [
          {
            data: [80000, 42201, 59490, 11933],
            border: 'none',
            backgroundColor: '#7655FA',
          },
        ]
      })
      setChartOption({
        plugins: {
          title: {
            display: true,
            text: 'Roboto',
            font: {
              size: (context) => {
                return context.chart.width <= 768 ? 10 : 30; // Adjust font size based on chart width
              }
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      })
    },[])

  return (
      <Bar data={chartData} options={chartOption} className='md:!h-[400px] !h-[250px]'/>
  );
};

export default BarChart;
