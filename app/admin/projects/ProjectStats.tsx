import React from "react";
import { Card, Typography, Row, Col } from "antd";
import { ProjectStatsProps } from "./types";

const { Title } = Typography;

const ProjectStats: React.FC<ProjectStatsProps> = ({ projects }) => {
  return (
    <Card className="mt-8 shadow-md">
      <Title level={4} className="mb-4">
        Thống kê dự án
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={6}>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand">
              {projects.length}
            </div>
            <div className="text-gray-600">Tổng dự án</div>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {projects.filter((p) => p.productLink).length}
            </div>
            <div className="text-gray-600">Có demo</div>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(
                projects.reduce((acc, p) => acc + p.teamSize, 0) /
                  projects.length
              ) || 0}
            </div>
            <div className="text-gray-600">TB thành viên</div>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {
                Array.from(new Set(projects.flatMap((p) => p.technologies)))
                  .length
              }
            </div>
            <div className="text-gray-600">Công nghệ</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectStats;
