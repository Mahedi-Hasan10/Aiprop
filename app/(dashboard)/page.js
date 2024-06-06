"use client";
import { Checkbox, Form, Input, } from "antd";
import Link from "next/link";

const page = () => {

  return (
    <div className=" border !w-[500px] p-8 mx-auto my-[100px] bg-black/80 rounded-md ">
      <div className="">
        <h1 className=" text-white font-medium md:text-2xl text-base capitalize text-center">
          Welcome
        </h1>
        <p className="text-textGray dark:text-white/70 mt-3 text-center md:text-base text-xs mb-[30px] ">
          Please Provide Your Valid Credentials
        </p>
        <Form
          layout="vertical"
          // onFinish={async (values) => {
          //   const { error, msg, data } = await userLogin(values);
          //   setUserIn(data?.user);
          //   if (error) {
          //     message.error(msg);
          //   } else {
          //     if (data?.user?.role === "admin") {
          //       router.push("/admin");
          //       localStorage.setItem("token", data?.token);
          //       message.success(msg);
          //     } else {
          //       localStorage.setItem("token", data?.token);
          //       //   getUser();
          //       router.push("/user");
          //       message.success(msg);
          //     }
          //   }
          // }}
          className="w-full"
        >
          <Form.Item
            name="email"
            required
            rules={[{ required: true, message: 'Please input your email!' }]}

          >
            <Input type="email" placeholder='Enter your email' className="px-4 py-4 font-semibold text-sm  border  hover:!border-secondary focus:border-secondary" />
          </Form.Item>

          <Form.Item
            name="password"
            noStyle={false}
            required
            rules={[{ required: true, message: 'Please input your password!' }]}

          >
            <Input.Password placeholder='Enter your password' className="px-4 py-4 font-semibold text-sm  border  hover:!border-secondary focus:!border-secondary " />
          </Form.Item>
          <div>
            <Checkbox className="text-textGray dark:text-white/70 md:text-sm text-xs">
              Remember Me
            </Checkbox>
          </div>
          <div className="mt-5">
            <button className={"w-full bg-secondary py-3 text-white font-semibold text-2xl rounded"}>Login</button>
          </div>
          <div className="md:text-sm text-xs text-textGray dark:text-white/70 mt-3 flex items-center justify-between">
            <p>
              Haven't an account?{" "}
              <span>
                <Link
                  href={"/register"}
                  className="text-secondary hover:!text-secondary hover:underline"
                >
                  Register
                </Link>{" "}
              </span>
            </p>
            <Link
              href="/forgot-password"
              className="text-textGray text-[10px] md:text-sm md:text-balance dark:text-white/70 hover:!text-secondary hover:underline"
            >
              Forgot Password
            </Link>
          </div>
        </Form>     
      </div>     
    </div>
  );
};

export default page;
