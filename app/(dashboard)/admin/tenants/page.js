"use client";
import React from "react";
import { dataSource3 } from "../../components/data";
import { Tooltip, Menu, Dropdown, Button, Table } from "antd";
import { CiMenuKebab } from "react-icons/ci";

const ActionMenu = ({ record }) => (
  <Menu>
    <Menu.Item key="edit">
      <button>Edit</button>
    </Menu.Item>
    <Menu.Item key="delete" className="hover:bg-red-500 hover:text-white ">
      <button>Delete</button>
    </Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: " Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Rent",
    dataIndex: "rent",
    key: "rent",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Tooltip title="Actions">
        <Dropdown overlay={<ActionMenu record={record} />} trigger={["hover"]}>
          <Button type="link" icon={<CiMenuKebab className="rotate-90" />} />
        </Dropdown>
      </Tooltip>
    ),
  },
];

const page = () => {
  return (
    <div className="container">
      <div className="px-[30px] pb-[21px] pt-[30px] bg-white rounded-md  h-fit w-full">
        <h3 className="text-[28px] font-semibold text-[#030303] mb-[30px]">
          Filter by - ID
        </h3>
        <Table
          className="overflow-x-scroll"
          dataSource={dataSource3}
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
          }}
        />
      </div>
    </div>
  );
};

export default page;
