"use client";
import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    datasets: [
      {
        data: [30, 20, 15, 10, 17, 8],
        backgroundColor: [
          " #6d48ff",
          "#E4DDFE",
          "#4ECB71",
          "#FFD233",
          "#ff9a62",
          "#d99bff",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} className="md:!h-[300px] !h-[200px]" />;
};

export default PieChart;
