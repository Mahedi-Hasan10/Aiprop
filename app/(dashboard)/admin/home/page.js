"use client";
import { Flex, Input, Progress, Rate, Select } from "antd";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Table } from "antd";
import { DataSource, DataSource2 } from "../../components/data";
const BarChartPage = dynamic(
  () => import("../../components/admin/barChartComponent.js"),
  { ssr: false }
);
const PieChartComponent = dynamic(
  () => import("../../components/admin/pieChartComponent.js"),
  { ssr: false }
);
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
          <div className="px-[30px] pb-[21px] pt-[30px] bg-white rounded-md  h-fit w-full">
            <h3 className="text-[28px] font-semibold text-[#030303] mb-[30px]">
              Active work orders
            </h3>
            <Table
              className="overflow-x-scroll "
              dataSource={DataSource}
              columns={columns}
            />
          </div>
          {/* <div className="mt-4 flex lg:flex-row flex-col gap-[30px] border">
            <div className="border flex justify-center lg:w-1/2 w-full">
              <PieChartComponent />
            </div>
            <div className=" border flex justify-center md:justify-start lg:w-1/2 w-full">
              <BarChartPage />
            </div>
          </div> */}
        </div>
        <div className="px-[30px] pb-[21px] pt-[30px] bg-white rounded-md shadow  ">
          <div className="flex gap-4">
            <div className="flex gap-3 ">
              <Image
                src="/images/call.png"
                height={200}
                width={200}
                className="h-[44px] w-[44px] object-fill"
                alt="call"
              />
              <h3 className="text-[28px] font-semibold text-[#030303] mb-[30px]">
                Tenant calls
              </h3>
            </div>
            <Select
              variant="borderless"
              className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] text-xl"
              defaultValue="monthly"
              style={{
                width: 120,
              }}
              // onChange={handleChange}
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
