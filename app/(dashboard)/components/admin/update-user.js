// app/update-user/page.js

"use client";

import { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function UpdateUser() {
  const [form] = Form.useForm();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        id: user.sub,
        email: user.email,
        given_name: user.name,
        // Add other fields as needed
      });
    }
  }, [user, form]);

  const onFinish = async (values) => {
    const response = await fetch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${values?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: values.id,
          data: values,
        }),
      }
    );

    const result = await response.json();
    if (response.ok) {
      alert("User updated successfully");
    } else {
      alert(`Error: ${result.message}`);
    }
  };

  return (
    <Form form={form} name="update-user" onFinish={onFinish} layout="vertical">
      <Form.Item label="User ID" name="id">
        <Input readOnly />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Given Name" name="given_name">
        <Input />
      </Form.Item>
      <Form.Item label="Family Name" name="family_name">
        <Input />
      </Form.Item>
      {/* Add other fields as needed */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update User
        </Button>
      </Form.Item>
    </Form>
  );
}
