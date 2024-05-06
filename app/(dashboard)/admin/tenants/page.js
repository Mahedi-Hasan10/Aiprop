"use client";
import React, { useState } from "react";
import { dataSource3 } from "../../components/data";
import { IoIosSearch } from "react-icons/io";

import {
  Tooltip,
  Menu,
  Dropdown,
  Button,
  Table,
  Input,
  DatePicker,
} from "antd";
import { CiMenuKebab } from "react-icons/ci";

const { Search } = Input;
const { RangePicker } = DatePicker;

const ActionMenu = ({ record }) => (
  <Menu>
    <Menu.Item key="edit">
      <button>Edit</button>
    </Menu.Item>
    <Menu.Item key="delete" className="hover:bg-red-500 hover:text-white">
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
    title: "Name",
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

const Page = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const filteredDataSource = dataSource3.filter((item) => {
    const isTextMatch = Object.keys(item).some(
      (key) =>
        item[key] && item[key].toString().toLowerCase().includes(searchText)
    );

    const isDateMatch =
      !selectedDates ||
      selectedDates.length === 0 ||
      (item.date &&
        selectedDates[0]?.isSameOrBefore(item.date, "day") &&
        selectedDates[1]?.isSameOrAfter(item.date, "day"));

    return isTextMatch && isDateMatch;
  });

  return (
    <div className="">
      <div className="px-[30px] pb-[21px] pt-[30px] bg-white rounded-md  h-fit w-full">
        <h3 className="text-[28px] font-semibold text-[#030303] mb-[30px]">
          Filter by - ID
        </h3>
        <div className="flex gap-5 w-1/2" style={{ marginBottom: 16 }}>
          <Search
            placeholder={
              <>
                <IoIosSearch /> Search
              </>
            }
            allowClear
            enterButton={false}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <RangePicker
            style={{ marginLeft: 8 }}
            onChange={handleDateChange}
            placeholder={["Pick Date Range", ""]}
          />
        </div>
        <Table
          className="overflow-x-scroll"
          dataSource={filteredDataSource}
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
          }}
        />
      </div>
    </div>
  );
};

export default Page;
