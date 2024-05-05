"use client";
import { Flex, Input, Progress, Rate } from "antd";
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
      let bgColor;
      switch (text) {
        case "waiting":
          bgColor = "#F1EEFF";

          break;
        case "pending":
          bgColor = "#F7F7B2";
          break;
        case "contracted":
          bgColor = "#9D9D9D ";
          break;
        default:
          bgColor = "#FFFFFF";
      }
      return (
        <div
          style={{ backgroundColor: bgColor }}
          className="text-center w-full"
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
      <div className="flex justify-between md:flex-row flex-col gap-5 container">
        <div className="md:w-[80%]">
          <div className="px-[30px] pb-[21px] pt-[30px] bg-white rounded-md  h-fit w-full">
            <h3 className="text-[28px] font-semibold text-[#030303] mb-[30px]">
              Active work orders
            </h3>
            <Table
              className="overflow-x-scroll"
              dataSource={DataSource}
              columns={columns}
            />
          </div>
          <div className="mt-4 flex lg:flex-row flex-col gap-[30px] border">
            <div className="border flex justify-center lg:w-1/2 w-full">
              <PieChartComponent />
            </div>
            <div className=" border flex justify-center md:justify-start lg:w-1/2 w-full">
              <BarChartPage />
            </div>
          </div>
        </div>
        <div className="px-[30px] pb-[21px] pt-[30px] bg-white rounded-md">
          <div className="flex gap-3">
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
          <Table dataSource={DataSource2} columns={columns2} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
