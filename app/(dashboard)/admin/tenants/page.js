"use client";
import React, { useEffect, useState } from "react";
import { dataSource3 } from "../../components/data";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import {
  Tooltip,
  Menu,
  Dropdown,
  Button,
  Table,
  Input,
  DatePicker,
  Select,
} from "antd";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Modal, Form } from "antd";
const { Search } = Input;
const { RangePicker } = DatePicker;
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
import { IoSearchOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Page = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [openTenant, setTenantModel] = useState(false);
  const [openTenantFile, setTenantFileModel] = useState(false);
  const [edit, setEdit] = useState(false);

  const onEditHandle = () => {
    setEdit(true);
    showTenantModal();
  };
  useEffect(() => {
    if (edit) {
      form.setFieldsValue({
        name: "John Doe",
        address: "Texas City",
        phone: "+880454544",
        rent: "1000",
      });
    }
  }, [edit, form]);
  const showTenantModal = () => {
    setTenantModel(!openTenant);
  };
  const hideTenantModal = () => {
    setTenantModel(!openTenant);
    setEdit(false);
    form.resetFields();
  };
  const showTenantFileModal = () => {
    setTenantFileModel(!openTenantFile);
  };
  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const ActionMenu = ({ record }) => (
    <Menu>
      <Menu.Item key="edit">
        <button
          onClick={onEditHandle}
          className="flex text-xl font-semibold items-center gap-2 text-[#7655FA]"
        >
          {" "}
          <MdEdit size={24} /> Edit
        </button>
      </Menu.Item>
      <Menu.Item key="delete" className="hover:bg-red-500 hover:text-white">
        <button
          onClick={handleDelete}
          className="flex text-xl font-semibold items-center gap-2 text-[#FF6868]"
        >
          {" "}
          <RiDeleteBin6Fill size={24} /> Delete
        </button>
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
        <Tooltip>
          <Dropdown
            overlay={<ActionMenu record={record} />}
            trigger={["hover"]}
          >
            <Button type="link" icon={<CiMenuKebab className="rotate-90" />} />
          </Dropdown>
        </Tooltip>
      ),
    },
  ];

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
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <h3 className="text-[28px] font-semibold text-[#030303] mb-[30px]">
            Filter by - ID
          </h3>
          <div className="flex md:flex-row flex-col md:items-center gap-5 mb-[30px]">
            <button
              onClick={showTenantFileModal}
              className="py-[10px] px-[16px]  bg-[#F1EEFF] text-primary rounded-[5px] text-xl flex items-center gap-[13px]"
            >
              <Image
                src="/import.png"
                height={50}
                width={50}
                alt="import"
                className="h-[18px] w-[18px]"
              />
              Import new list
            </button>
            <button
              onClick={showTenantModal}
              className="py-[10px] px-[16px] justify-center bg-primary text-white rounded-[5px] text-xl font-semibold flex items-center gap-[13px]"
            >
              <FaPlus />
              Add new
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between  md:items-center  mb-[30px]">
          <div
            className="flex lg:flex-row flex-col items-center  gap-5 lg:w-[65%] w-full"
            style={{ marginBottom: 16 }}
          >
            <div className="flex border items-center w-full px-[20px] py-1 rounded-[5px] overflow-hidden ">
              <IoSearchOutline className="text-xl font-semibold -[23px]" />
              <Search
                variant="borderless"
                className="searchs"
                placeholder={"Search here"}
                allowClear
                enterButton={false}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <RangePicker
              onChange={handleDateChange}
              placeholder={["Pick Date Range", ""]}
              className="rangeP"
            />
          </div>

          <Select
            variant="borderless"
            className="py-[10px] px-[16px] border !w-[194px] bg-[#F1EEFF] text-primary rounded-[5px] text-xl flex items-center justify-center gap-[13px]"
            defaultValue="Show10Results"
            style={{}}
            options={[
              {
                value: "Show10Results",
                label: "Show 10 Results",
              },
              {
                value: "Show20Results",
                label: "Show 20 Results",
              },
              {
                value: "Show30Results",
                label: "Show 30 Results",
              },
            ]}
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
        {/* form=== */}
        <Modal open={openTenant}>
          <div className="flex justify-between mb-[40px] text-[26px] ">
            <h3 className=" font-medium text-[#030303]">
              {edit ? "Update tenants" : "Add new tenants"}
            </h3>
            <RxCross2 className="cursor-pointer" onClick={hideTenantModal} />
          </div>
          <Form
            form={form}
            layout="vertical"
            className="w-full"
            onFinish={() => {
              form.resetFields();
              message.success("Added successfully");
            }}
          >
            <Form.Item label="Name" name="name">
              <Input
                type="text"
                placeholder="Enter tenants name"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl bg-white  "
              />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input
                type="text"
                placeholder="Enter tenants address"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl bg-white "
              />
            </Form.Item>
            <Form.Item label="Phone Number" name="phone">
              <Input
                type="text"
                placeholder="Enter tenants phone number"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl bg-white "
              />
            </Form.Item>
            <Form.Item label="Rent" name="rent">
              <Input
                type="text"
                placeholder="Enter rent"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl bg-white "
              />
            </Form.Item>

            <div className="  mt-[20px] text-[28px] font-semibold w-full ">
              <button
                onClick={showTenantModal}
                className="py-[10px] px-[16px] bg-primary text-white rounded-[5px] text-xl font-semibold flex items-center justify-center w-full gap-[13px]"
              >
                <FaPlus />
                {edit ? "Update Tenant" : "Add Tenant"}
              </button>
            </div>
          </Form>
        </Modal>
        {/* file */}
        <Modal open={openTenantFile}>
          <div className="flex justify-between mb-[40px] text-[26px] ">
            <h3 className=" font-medium text-[#030303]">Import new list</h3>
            <RxCross2
              className="cursor-pointer"
              onClick={showTenantFileModal}
            />
          </div>
          <Form
            layout="vertical"
            className="w-full"
            onFinish={() => {
              message.success("Added successfully");
            }}
          >
            <Dragger {...props}>
              <div className="flex justify-center">
                <p className="ant-upload-drag-icon bg-[#F1EEFF] h-[80px] w-[80px] rounded-full flex items-center justify-center">
                  <Image
                    src="/import.png"
                    height={50}
                    width={50}
                    alt="import"
                    className="h-[44px] w-[44px]"
                  />
                </p>
              </div>
              <p className="ant-upload-text !text-2xl !font-medium">
                <span className="!text-primary">
                  Select an Excel file to Upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="ant-upload-hint !text-2xl !text-[#030303]/40">
                (Max. File size: 25 MB)
              </p>
            </Dragger>
            <div className="flex gap-[30px] items-center justify-between  mt-[20px] text-[28px] font-semibold w-full ">
              <button
                onClick={showTenantFileModal}
                className="py-[10px] px-[16px] bg-[#F1EEFF] text-primary rounded-[5px] text-xl font-semibold  w-full "
              >
                Discard
              </button>
              <button
                onClick={showTenantFileModal}
                className="py-[10px] px-[16px] bg-primary text-white rounded-[5px] text-xl font-semibold  w-full "
              >
                Import Tenant
              </button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Page;
