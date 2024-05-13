"use client";
import { Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Table } from "antd";
import { DataSource, DataSource2 } from "../../components/data";
import dynamic from "next/dynamic";
import { useUser } from "@auth0/nextjs-auth0/client";

const PieChart = dynamic(() => import("../../components/admin/pieChart.js"), {
  ssr: false,
});

const BarChart = dynamic(() => import("../../components/admin/barChart.js"), {
  ssr: false,
});

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
  const { user, error, isLoading } = useUser();

  return (
    <div className="relative">
      <div className="flex xl:flex-row flex-col xl:gap-[30px] gap-[10px] w-full relative ">
        <div className=" 2xl:w-[70%] xl:w-[60%] w-full">
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

          <div className="mt-[30px] flex xl:flex-row flex-col gap-[30px] ">
            <div className="shadow bg-white px-[30px] pt-[37px] pb-[30px] rounded-[10px] x:w-1/2 w-full  relative ">
              <div className="flex items-center justify-between w-full ">
                <h3 className="md:text-[28px] text-xl font-semibold text-[#030303] ">
                  Repair call stats
                </h3>
                <Select
                  variant="borderless"
                  className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] !text-4xl w-[130px]"
                  defaultValue="monthly"
                  style={{}}
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
              <div className="mt-[40px] flex justify-center flex-col">
                <div className="w-full h-full flex justify-center">
                  <PieChart />
                </div>
                <div className="mt-[30px] flex md:flex-row flex-col justify-between gap-4 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] bg-[#6D48FF]"></div>
                      <h2 className="text-xl text-[#030303]/60">
                        Bills plumbing
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] bg-[#E4DDFE]"></div>
                      <h2 className="text-xl text-[#030303]/60">
                        Jeff’s plumbing
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] bg-[#4ECB71]"></div>
                      <h2 className="text-xl text-[#030303]/60">
                        Johnson's HVAC
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] bg-[#D99BFF]"></div>
                      <h2 className="text-xl text-[#030303]/60">
                        Estep electric
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] bg-[#FF9A62]"></div>
                      <h2 className="text-xl text-[#030303]/60">Air leaks</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[24px] h-[24px] bg-[#FFD233]"></div>
                      <h2 className="text-xl text-[#030303]/60">Omar</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow bg-white px-[30px] pt-[37px] pb-[30px] rounded-[10px] xl:w-1/2 w-full  relative ">
              <div className="flex items-center justify-between w-full ">
                <h3 className="md:text-[28px] text-xl font-semibold text-[#030303] ">
                  Issue breakdown
                </h3>
                <Select
                  variant="borderless"
                  className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] !text-4xl w-[130px]"
                  defaultValue="monthly"
                  style={{}}
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

        <div className="px-[10px] 2xl:w-[30%] xl:w-[40%] pb-[21px] pt-[30px] bg-white rounded-md shadow relative ">
          <div className="flex gap-4 justify-between mb-3 relative  ">
            <div className="flex gap-3 ">
              <Image
                src="/images/call.png"
                height={200}
                width={200}
                className="h-[44px] w-[44px] object-fill"
                alt="call"
              />
              <h3 className="md:text-[25px] text-xl font-semibold text-[#030303]  mb-[30px]">
                Tenant calls
              </h3>
            </div>
            <Select
              variant="borderless"
              className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] !text-4xl w-[130px]"
              defaultValue="monthly"
              style={{}}
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
          <Table
            dataSource={DataSource2}
            columns={columns2}
            className="relative"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
