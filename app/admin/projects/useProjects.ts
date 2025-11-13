import { useState } from "react";
import { Form, message } from "antd";
import type { UploadFile } from "antd";
import { Project } from "./types";

const DEFAULT_PROJECT_IMAGE = "/images/default-project.svg";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "E-commerce Platform",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      teamSize: 5,
      description:
        "Hệ thống thương mại điện tử với tính năng đầy đủ bao gồm quản lý sản phẩm, đơn hàng, thanh toán online và báo cáo doanh thu.",
      role: "Frontend Developer - Phụ trách phát triển giao diện người dùng, tích hợp API và tối ưu hóa performance.",
      image: "/api/placeholder/400/300",
      productLink: "https://ecommerce-demo.com",
      gitLink: "https://github.com/user/ecommerce-platform",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Task Management App",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      teamSize: 3,
      description:
        "Ứng dụng quản lý công việc với khả năng phân công task, theo dõi tiến độ và báo cáo hiệu suất làm việc.",
      role: "Full-stack Developer - Thiết kế database, phát triển API và frontend, deploy ứng dụng.",
      image: DEFAULT_PROJECT_IMAGE,
      gitLink: "https://github.com/user/task-management",
      createdAt: "2024-02-20",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleAddProject = () => {
    setEditingProject(null);
    setFileList([]);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    form.setFieldsValue({
      ...project,
      technologies: project.technologies.join(", "),
    });
    setFileList([]);
    setIsModalVisible(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    message.success("Xóa dự án thành công!");
  };

  const handleSubmit = async (values: any) => {
    try {
      const technologiesArray = values.technologies
        .split(",")
        .map((tech: string) => tech.trim())
        .filter((tech: string) => tech);

      const projectData: Project = {
        id: editingProject?.id || Date.now().toString(),
        name: values.name,
        technologies: technologiesArray,
        teamSize: values.teamSize,
        description: values.description,
        role: values.role,
        image:
          fileList.length > 0
            ? URL.createObjectURL(fileList[0].originFileObj!)
            : editingProject?.image || DEFAULT_PROJECT_IMAGE,
        productLink: values.productLink,
        gitLink: values.gitLink,
        createdAt:
          editingProject?.createdAt || new Date().toISOString().split("T")[0],
      };

      if (editingProject) {
        setProjects((prev) =>
          prev.map((p) => (p.id === editingProject.id ? projectData : p))
        );
        message.success("Cập nhật dự án thành công!");
      } else {
        setProjects((prev) => [...prev, projectData]);
        message.success("Thêm dự án thành công!");
      }

      setIsModalVisible(false);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      message.error("Có lỗi xảy ra!");
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return {
    projects,
    isModalVisible,
    editingProject,
    form,
    fileList,
    setFileList,
    handleAddProject,
    handleEditProject,
    handleDeleteProject,
    handleSubmit,
    handleCloseModal,
    DEFAULT_PROJECT_IMAGE,
  };
};
