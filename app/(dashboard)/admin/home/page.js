"use client";
import { Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Table } from "antd";
import { DataSource, DataSource2 } from "../../components/data";
import dynamic from "next/dynamic";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFetch } from "../../helpers/hooks.js";
import { fetchTcalls, fetchWorkers } from "../../helpers/backend.js";


const PieChart = dynamic(() => import("../../components/admin/pieChart.js"), {
  ssr: false,
});

const BarChart = dynamic(() => import("../../components/admin/barChart.js"), {
  ssr: false,
});





const AdminDashboard = () => {
  const [data, getData] = useFetch(fetchWorkers);
  const [tcalls, getTcalls] = useFetch(fetchTcalls, { timeframe: '1year' });
  const { user, error, isLoading } = useUser();

  const columns = [
    {
      title: "SL",
      dataIndex: "WorkOrderID",
      key: "WorkOrderID",
      render: (text) => text && text.length > 10 ? `${text.substring(0, 10)}...` : text,
    },
    {
      title: "Tenant Name",
      dataIndex: "TenantName",
      key: "TenantName",
      render: (text) => text && text.length > 10 ? `${text.substring(0, 10)}...` : text,
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      key: "CompanyName",
      render: (text) => text && text.length > 10 ? `${text.substring(0, 10)}...` : text,
    },
    {
      title: "Issue",
      dataIndex: "Issue",
      key: "Issue",
      render: (text) => text && text.length > 10 ? `${text.substring(0, 10)}...` : text,
    },
    {
      title: "Start Timestamp",
      dataIndex: "StartTimestamp",
      key: "StartTimestamp",
      render: (text) => text && text.length > 10 ? `${text.substring(0, 10)}...` : text,
    },

    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
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

  ];

  const columns2 = [
    {
      title: "SL",
      dataIndex: "TenantID",
      key: "TenantID",
    },
    {
      title: "Tenant Name",
      dataIndex: "TenantName",
      key: "TenantName",
      render: (text) => text && text.length > 10 ? `${text.substring(0, 10)}...` : text,
    },
    {
      title: "Call Count",
      dataIndex: "CallCount",
      key: "CallCount",
    },

  ];

  return (
    <div className="relative">
      <div className="flex xl:flex-row flex-col xl:gap-[30px] gap-[10px] w-full relative ">
        <div className=" 2xl:w-[70%] xl:w-[60%] w-full">
          <div className="px-[10px] pb-[21px] pt-[30px] bg-white rounded-md  h-fit w-full ">
            <h3 className="md:text-[28px] text-xl text-center md:text-start font-semibold text-[#030303] mb-[30px]">
              Active work orders
            </h3>
            <Table
              className="overflow-x-scroll "
              dataSource={data}
              columns={columns}
              pagination={false}
            />
          </div>

          <div className="mt-[30px] flex 2xl:flex-row flex-col gap-[20px]  ">
            <div className="shadow bg-white px-[30px] pt-[37px] pb-[30px] rounded-[10px] 2xl:w-1/2  w-full  relative ">
              <div className="flex items-center justify-between w-full gap-2 ">
                <h3 className="text-[20px] md:text-[28px] font-semibold text-[#030303] whitespace-pre ">
                  Repair call stats
                </h3>
                <Select
                  variant="borderless"
                  className="!bg-[#F1EEFF]  !text-[#030303] placeholder:!text-[#030303] text-[500px]  w-[130px] xl:w-[150px]"
                  defaultValue="monthly"
                  options={[
                    {
                      value: "monthly",
                      label: (
                        <div>
                          <span className="flex gap-2 group items-center hover:text-[#7655FA] font-semibold">
                            Monthly{" "}
                            <Image
                              src="/check.png"
                              height={20}
                              width={20}
                              className="h-[10px] w-[14px] hidden group-hover:flex duration-500"
                              alt="check"
                            />
                          </span>
                        </div>
                      ),
                    },
                    {
                      value: "annual",
                      label: (
                        <span className="flex gap-2 group items-center hover:text-[#7655FA] font-semibold">
                          Annual{" "}
                          <Image
                            src="/check.png"
                            height={20}
                            width={20}
                            className="h-[10px] w-[14px] hidden group-hover:flex duration-500"
                            alt="check"
                          />
                        </span>
                      ),
                    },
                  ]}
                />
              </div>
              <div className="mt-[40px] flex justify-center flex-col  ">
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

            <div className="shadow bg-white px-[30px] pt-[37px] pb-[30px]  rounded-[10px] 2xl:w-1/2 w-full  relative ">
              <div className="flex items-center justify-between w-full gap-2 ">
                <h3 className="text-[20px] md:text-[28px] font-semibold text-[#030303] whitespace-pre ">
                  Issue breakdown
                </h3>
                <Select
                  variant="borderless"
                  className="!bg-[#F1EEFF]  !text-[#030303] placeholder:!text-[#030303] text-[500px]  w-[130px] xl:w-[150px]"
                  defaultValue="monthly"
                  options={[
                    {
                      value: "monthly",
                      label: (
                        <div>
                          <span className="flex gap-2 group items-center hover:text-[#7655FA] font-semibold">
                            Monthly{" "}
                            <Image
                              src="/check.png"
                              height={20}
                              width={20}
                              className="h-[10px] w-[14px] hidden group-hover:flex duration-500"
                              alt="check"
                            />
                          </span>
                        </div>
                      ),
                    },
                    {
                      value: "annual",
                      label: (
                        <span className="flex gap-2 group items-center hover:text-[#7655FA] font-semibold">
                          Annual{" "}
                          <Image
                            src="/check.png"
                            height={20}
                            width={20}
                            className="h-[10px] w-[14px] hidden group-hover:flex duration-500"
                            alt="check"
                          />
                        </span>
                      ),
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

        <div className="px-[10px] 2xl:w-[40%] xl:w-[40%] pb-[21px] pt-[30px] bg-white rounded-md shadow relative ">
          <div className="flex gap-4 items-center justify-between mb-[30px] relative  ">
            <div className="flex items-center gap-3 ">
              <Image
                src="/images/call.png"
                height={200}
                width={200}
                className="h-[44px] w-[44px] object-fill"
                alt="call"
              />
              <h3 className="md:text-[25px] text-xl font-semibold text-[#030303] ">
                Tenant calls
              </h3>
            </div>
            <Select
              variant="borderless"
              className="!bg-[#F1EEFF] !py-[11px] !px-[15px] !text-[#030303] placeholder:!text-[#030303] !text-4xl !w-[150px]"
              defaultValue="monthly"
              options={[
                {
                  value: "monthly",
                  label: (
                    <div>
                      <span className="flex gap-2 group items-center hover:text-[#7655FA] font-semibold">
                        Monthly{" "}
                        <Image
                          src="/check.png"
                          height={20}
                          width={20}
                          className="h-[10px] w-[14px] hidden group-hover:flex duration-500"
                          alt="check"
                        />
                      </span>
                    </div>
                  ),
                },
                {
                  value: "annual",
                  label: (
                    <span className="flex gap-2 group items-center hover:text-[#7655FA] font-semibold">
                      Annual{" "}
                      <Image
                        src="/check.png"
                        height={20}
                        width={20}
                        className="h-[10px] w-[14px] hidden group-hover:flex duration-500"
                        alt="check"
                      />
                    </span>
                  ),
                },
              ]}
            />
          </div>
          <Table
            dataSource={tcalls}
            columns={columns2}
            className="relative w-full"
            pagination={false}

          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
