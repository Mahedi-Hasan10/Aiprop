"use client";
import { Flex, Input, Progress, Rate, Select } from "antd";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Table } from "antd";
import { DataSource, DataSource2 } from "../../components/data";

import { Pie, Bar } from 'react-chartjs-2';
import BarChart from "../../components/admin/barChart";
import PieArcLabel from "../../components/admin/pieChart";
import PieChart from "../../components/admin/pieChart";



const columns = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tenant Name",
    dataIndex: "tenantName",
    key: "tenantName",
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Issue",
    dataIndex: "issue",
    key: "issue",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => {
      let textColor;
      let bgColor;
      switch (text) {
        case "Waiting":
          textColor = "#030303";
          bgColor = "rgba(157, 157, 157, 0.3)";
          break;
        case "Pending":
          textColor = "#030303";
          bgColor = "#F7F7B2";
          break;
        case "Contacted":
          textColor = "#7655FA";
          bgColor = "#F1EEFF";
          break;
        default:
          textColor = "#030303";
          bgColor = "#FFFFFF";
      }
      return (
        <div
          style={{ backgroundColor: bgColor, color: textColor }}
          className="text-center w-full px-[10px] py-[5px] rounded-[5px]"
        >
          {text}
        </div>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
];

const columns2 = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Customer",
    dataIndex: "tenantName",
    key: "tenantName",
  },

  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (text) => {
      return <div className="text-[#7655FA]">{text}</div>;
    },
  },
];


const AdminDashboard = () => {
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:gap-[30px] gap-[10px] w-full ">
        <div className="xl:w-[80%] w-full">
          <div className="px-[10px] pb-[21px] pt-[30px] bg-white rounded-md  h-fit w-full">
            <h3 className="md:text-[28px] text-xl text-center md:text-start font-semibold text-[#030303] mb-[30px]">
              Active work orders
            </h3>
            <Table
              className="overflow-x-scroll "
              dataSource={DataSource}
              columns={columns}
            />
          </div>

          <div className="mt-4 flex xl:flex-row flex-col gap-[30px] ">
            <div className="shadow bg-white px-[30px] pt-[37px] pb-[30px] rounded-[10px] x:w-1/2 w-full  relative ">
              <div className="flex items-center justify-between w-full ">
                <h3 className="md:text-[28px] text-xl font-semibold text-[#030303] ">
                  Repair call stats
                </h3>
                <Select
                  variant="borderless"
                  className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] text-xl rounded-[5px]"
                  defaultValue="monthly"
                  style={{
                    width: 120,
                  }}
                  options={[
                    {
                      value: "monthly",
                      label: "Monthly",
                    },
                    {
                      value: "annual",
                      label: "Annual",
                    },
                  ]}
                />
              </div>
              <div className="mt-[40px] flex justify-center">
                <PieChart/>
              </div>
            </div>

            <div className="shadow bg-white px-[30px] pt-[37px] pb-[30px] rounded-[10px] xl:w-1/2 w-full  relative ">
              <div className="flex items-center justify-between w-full ">
                <h3 className="md:text-[28px] text-xl font-semibold text-[#030303] ">
                  Issue breakdown
                </h3>
                <Select
                  variant="borderless"
                  className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] text-xl rounded-[5px]"
                  defaultValue="monthly"
                  style={{
                    width: 120,
                  }}
                  options={[
                    {
                      value: "monthly",
                      label: "Monthly",
                    },
                    {
                      value: "annual",
                      label: "Annual",
                    },
                  ]}
                />
              </div>
              <div className="mt-[40px]">
                <BarChart />
              </div>
            </div>
          </div>
        </div>

        <div className="px-[10px] pb-[21px] pt-[30px] bg-white rounded-md shadow  ">
          <div className="flex gap-4 justify-between  ">
            <div className="flex gap-3 ">
              <Image
                src="/images/call.png"
                height={200}
                width={200}
                className="h-[44px] w-[44px] object-fill"
                alt="call"
              />
              <h3 className="md:text-[28px] text-xl font-semibold text-[#030303]  mb-[30px]">
                Tenant calls
              </h3>
            </div>
            <Select
              variant="borderless"
              className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] !text-4xl w-[130px]"
              defaultValue="monthly"
              style={{
               
              }}
              options={[
                {
                  value: "monthly",
                  label: "Monthly",
                },
                {
                  value: "annual",
                  label: "Annual",
                },
              ]}
            />
          </div>
          <Table dataSource={DataSource2} columns={columns2} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
