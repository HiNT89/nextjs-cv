import React from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Upload,
  Button,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ProjectFormProps } from "./types";

const { TextArea } = Input;

const ProjectForm: React.FC<ProjectFormProps> = ({
  visible,
  onCancel,
  onSubmit,
  editingProject,
  form,
  fileList,
  setFileList,
}) => {
  const uploadProps = {
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("Chỉ được upload file hình ảnh!");
        return false;
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error("Hình ảnh không được vượt quá 5MB!");
        return false;
      }
      return false; // Prevent auto upload
    },
    fileList,
    onChange: (info: any) => {
      setFileList(info.fileList.slice(-1)); // Only keep the latest file
    },
  };

  return (
    <Modal
      title={editingProject ? "Chỉnh sửa dự án" : "Thêm dự án mới"}
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={800}
      className="top-4"
    >
      <Form form={form} layout="vertical" onFinish={onSubmit} className="mt-4">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Tên dự án"
              rules={[{ required: true, message: "Vui lòng nhập tên dự án!" }]}
            >
              <Input placeholder="Nhập tên dự án..." />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item
              name="technologies"
              label="Công nghệ sử dụng"
              rules={[{ required: true, message: "Vui lòng nhập công nghệ!" }]}
              extra="Phân cách bằng dấu phẩy (,)"
            >
              <Input placeholder="React, Node.js, MongoDB..." />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="teamSize"
              label="Số thành viên"
              rules={[
                { required: true, message: "Vui lòng nhập số thành viên!" },
              ]}
            >
              <InputNumber
                min={1}
                max={100}
                className="w-full"
                placeholder="5"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="description"
              label="Mô tả sản phẩm"
              rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
            >
              <TextArea rows={3} placeholder="Mô tả chi tiết về dự án..." />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="role"
              label="Nhiệm vụ / Vai trò"
              rules={[{ required: true, message: "Vui lòng nhập vai trò!" }]}
            >
              <TextArea
                rows={3}
                placeholder="Mô tả vai trò và nhiệm vụ của bạn trong dự án..."
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="image" label="Hình ảnh dự án (tùy chọn)">
              <div className="space-y-2">
                <div className="text-sm text-gray-500">
                  Nếu không upload ảnh, sẽ sử dụng ảnh mặc định
                </div>
                <Upload {...uploadProps} listType="picture-card">
                  {fileList.length === 0 && (
                    <div>
                      <UploadOutlined />
                      <div className="mt-2">Upload</div>
                    </div>
                  )}
                </Upload>
              </div>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="productLink" label="Link sản phẩm (tùy chọn)">
              <Input placeholder="https://demo.com" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="gitLink"
              label="Link GitHub"
              rules={[
                { required: true, message: "Vui lòng nhập link GitHub!" },
              ]}
            >
              <Input placeholder="https://github.com/user/repo" />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button onClick={onCancel}>Hủy</Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-brand hover:bg-brand/90"
          >
            {editingProject ? "Cập nhật" : "Thêm mới"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ProjectForm;
