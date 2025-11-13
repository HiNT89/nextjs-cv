"use client";
import React, { useState } from "react";
import {
  Card,
  Button,
  Upload,
  Typography,
  Row,
  Col,
  Modal,
  message,
  Spin,
} from "antd";
import {
  UploadOutlined,
  EyeOutlined,
  EditOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";

const { Title, Text } = Typography;

interface CVFile {
  id: string;
  name: string;
  language: "en" | "vi";
  url: string;
  uploadedAt: string;
  size: string;
}

const AdminPage = () => {
  const [loading, setLoading] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");

  // Mock data - thực tế sẽ fetch từ API
  const [cvFiles, setCvFiles] = useState<CVFile[]>([
    {
      id: "1",
      name: "CV_English.pdf",
      language: "en",
      url: "/api/cv/en",
      uploadedAt: "2024-01-15",
      size: "1.2 MB",
    },
    {
      id: "2",
      name: "CV_Vietnamese.pdf",
      language: "vi",
      url: "/api/cv/vi",
      uploadedAt: "2024-01-15",
      size: "1.1 MB",
    },
  ]);

  const handlePreview = (file: CVFile) => {
    setPreviewUrl(file.url);
    setPreviewTitle(file.name);
    setPreviewVisible(true);
  };

  const handleUpload = (language: "en" | "vi"): UploadProps => ({
    accept: ".pdf",
    maxCount: 1,
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error("Chỉ được upload file PDF!");
        return false;
      }
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        message.error("File không được vượt quá 10MB!");
        return false;
      }
      return true;
    },
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        setLoading(true);

        // Mock upload API call
        const formData = new FormData();
        formData.append("file", file as File);
        formData.append("language", language);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Update state
        const newFile: CVFile = {
          id: Date.now().toString(),
          name: (file as File).name,
          language,
          url: `/api/cv/${language}`,
          uploadedAt: new Date().toISOString().split("T")[0],
          size: `${((file as File).size / 1024 / 1024).toFixed(1)} MB`,
        };

        setCvFiles((prev) =>
          prev.map((item) => (item.language === language ? newFile : item))
        );

        message.success(
          `Upload CV ${
            language === "en" ? "tiếng Anh" : "tiếng Việt"
          } thành công!`
        );
        onSuccess?.(newFile);
      } catch (error) {
        console.error("Upload error:", error);
        message.error("Upload thất bại!");
        onError?.(error as Error);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleDownload = (file: CVFile) => {
    // Mock download
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    link.click();
    message.success("Tải xuống thành công!");
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-brand mb-8">
          Quản lý CV Files
        </Title>

        <Row gutter={[24, 24]}>
          {/* CV Tiếng Anh */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">CV Tiếng Anh</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    EN
                  </span>
                </div>
              }
              className="h-full shadow-md hover:shadow-lg transition-shadow"
            >
              {cvFiles.find((f) => f.language === "en") ? (
                <div className="space-y-4">
                  {(() => {
                    const file = cvFiles.find((f) => f.language === "en")!;
                    return (
                      <>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <Text strong className="block mb-2">
                            {file.name}
                          </Text>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Kích thước: {file.size}</span>
                            <span>Cập nhật: {file.uploadedAt}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          <Button
                            icon={<EyeOutlined />}
                            onClick={() => handlePreview(file)}
                            type="primary"
                            ghost
                          >
                            Xem trước
                          </Button>
                          <Button
                            icon={<DownloadOutlined />}
                            onClick={() => handleDownload(file)}
                          >
                            Tải xuống
                          </Button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Text>Chưa có CV tiếng Anh</Text>
                </div>
              )}

              <div className="mt-6 pt-4 border-t">
                <Upload {...handleUpload("en")} showUploadList={false}>
                  <Button
                    icon={<UploadOutlined />}
                    loading={loading}
                    type="primary"
                    className="w-full bg-brand hover:bg-brand/90"
                  >
                    {cvFiles.find((f) => f.language === "en")
                      ? "Cập nhật CV"
                      : "Upload CV"}{" "}
                    Tiếng Anh
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>

          {/* CV Tiếng Việt */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">CV Tiếng Việt</span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    VI
                  </span>
                </div>
              }
              className="h-full shadow-md hover:shadow-lg transition-shadow"
            >
              {cvFiles.find((f) => f.language === "vi") ? (
                <div className="space-y-4">
                  {(() => {
                    const file = cvFiles.find((f) => f.language === "vi")!;
                    return (
                      <>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <Text strong className="block mb-2">
                            {file.name}
                          </Text>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Kích thước: {file.size}</span>
                            <span>Cập nhật: {file.uploadedAt}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          <Button
                            icon={<EyeOutlined />}
                            onClick={() => handlePreview(file)}
                            type="primary"
                            ghost
                          >
                            Xem trước
                          </Button>
                          <Button
                            icon={<DownloadOutlined />}
                            onClick={() => handleDownload(file)}
                          >
                            Tải xuống
                          </Button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Text>Chưa có CV tiếng Việt</Text>
                </div>
              )}

              <div className="mt-6 pt-4 border-t">
                <Upload {...handleUpload("vi")} showUploadList={false}>
                  <Button
                    icon={<UploadOutlined />}
                    loading={loading}
                    type="primary"
                    className="w-full bg-brand hover:bg-brand/90"
                  >
                    {cvFiles.find((f) => f.language === "vi")
                      ? "Cập nhật CV"
                      : "Upload CV"}{" "}
                    Tiếng Việt
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Preview Modal */}
        <Modal
          title={previewTitle}
          open={previewVisible}
          onCancel={() => setPreviewVisible(false)}
          footer={null}
          width="80%"
          className="top-4"
        >
          <div className="h-96 bg-gray-100 flex items-center justify-center rounded-lg">
            {previewUrl ? (
              <iframe
                src={previewUrl}
                className="w-full h-full border-0 rounded-lg"
                title="CV Preview"
              />
            ) : (
              <div className="text-center text-gray-500">
                <Spin size="large" />
                <div className="mt-2">Đang tải preview...</div>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminPage;
