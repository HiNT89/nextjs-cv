"use client";
import React from "react";
import { Button, Typography, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ProjectCard from "./ProjectCard";
import ProjectStats from "./ProjectStats";
import ProjectForm from "./ProjectForm";
import { useProjects } from "./useProjects";

const { Title } = Typography;

const ProjectsPage = () => {
  const {
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
  } = useProjects();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Title level={2} className="text-brand mb-0">
            Quản lý Dự án
          </Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddProject}
            className="bg-brand hover:bg-brand/90"
          >
            Thêm dự án mới
          </Button>
        </div>

        {/* Projects Grid */}
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} lg={12} xl={8} key={project.id}>
              <ProjectCard
                project={project}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
                defaultImage={DEFAULT_PROJECT_IMAGE}
              />
            </Col>
          ))}
        </Row>

        {/* Statistics */}
        <ProjectStats projects={projects} />

        {/* Add/Edit Modal */}
        <ProjectForm
          visible={isModalVisible}
          onCancel={handleCloseModal}
          onSubmit={handleSubmit}
          editingProject={editingProject}
          form={form}
          fileList={fileList}
          setFileList={setFileList}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
