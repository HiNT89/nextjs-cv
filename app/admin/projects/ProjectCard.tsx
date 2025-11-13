import React from "react";
import {
  Card,
  Button,
  Typography,
  Tag,
  Tooltip,
  Popconfirm,
  Image,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  LinkOutlined,
  GithubOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { ProjectCardProps } from "./types";

const { Title, Text, Paragraph } = Typography;

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onEdit,
  onDelete,
  defaultImage,
}) => {
  return (
    <Card
      className="h-full shadow-md hover:shadow-lg transition-all duration-300"
      cover={
        <div className="h-48 overflow-hidden">
          <Image
            alt={project.name}
            src={project.image || defaultImage}
            className="w-full h-full object-cover"
            preview={false}
            fallback={defaultImage}
          />
        </div>
      }
      actions={[
        <Tooltip title="Xem chi tiết" key="view">
          <EyeOutlined onClick={() => onEdit(project)} />
        </Tooltip>,
        <Tooltip title="Chỉnh sửa" key="edit">
          <EditOutlined onClick={() => onEdit(project)} />
        </Tooltip>,
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa dự án này?"
          onConfirm={() => onDelete(project.id)}
          okText="Xóa"
          cancelText="Hủy"
          key="delete"
        >
          <DeleteOutlined className="text-red-500" />
        </Popconfirm>,
      ]}
    >
      <div className="space-y-3">
        <Title level={4} className="mb-2 text-brand">
          {project.name}
        </Title>

        {/* Technologies */}
        <div>
          <Text strong className="text-gray-600">
            Công nghệ:
          </Text>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <Tag key={index} color="blue" className="text-xs">
                {tech}
              </Tag>
            ))}
          </div>
        </div>

        {/* Team Size */}
        <div className="flex items-center gap-2">
          <TeamOutlined className="text-gray-600" />
          <Text className="text-sm">
            <span className="font-medium">{project.teamSize}</span> thành viên
          </Text>
        </div>

        {/* Description */}
        <div>
          <Text strong className="text-gray-600">
            Mô tả:
          </Text>
          <Paragraph
            className="mt-1 text-sm text-gray-700 mb-2"
            ellipsis={{ rows: 2, expandable: false }}
          >
            {project.description}
          </Paragraph>
        </div>

        {/* Role */}
        <div>
          <Text strong className="text-gray-600">
            Vai trò:
          </Text>
          <Paragraph
            className="mt-1 text-sm text-gray-700 mb-2"
            ellipsis={{ rows: 2, expandable: false }}
          >
            {project.role}
          </Paragraph>
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-2 border-t">
          {project.productLink && (
            <Button
              size="small"
              icon={<LinkOutlined />}
              href={project.productLink}
              target="_blank"
              type="link"
              className="p-0"
            >
              Demo
            </Button>
          )}
          <Button
            size="small"
            icon={<GithubOutlined />}
            href={project.gitLink}
            target="_blank"
            type="link"
            className="p-0"
          >
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
