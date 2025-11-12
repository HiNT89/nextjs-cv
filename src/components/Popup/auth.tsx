"use client";

import React from "react";
import { Modal, Button, Input, Form, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";

type Props = {
  open: boolean;
  onCancel: () => void;
};

type LoginFormData = {
  email: string;
  password: string;
};

const AuthModal = ({ open, onCancel }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Login data:", data);
      // TODO: Implement login API call here
      message.success("Đăng nhập thành công!");
      reset();
      onCancel();
    } catch (error) {
      message.error("Đăng nhập thất bại!");
    }
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <Modal
      title="Đăng nhập"
      open={open}
      onCancel={handleCancel}
      footer={null}
      centered
      width={400}
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email không hợp lệ",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                prefix={<UserOutlined />}
                placeholder="Email"
                size="large"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Vui lòng nhập mật khẩu",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự",
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
                size="large"
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AuthModal;
