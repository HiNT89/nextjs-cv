'use client';

import React from 'react';
import { FloatButton } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

const BackToTop: React.FC = () => {
  return (
    <FloatButton.BackTop
      style={{ 
        right: 24,
        bottom: 24,
        width: 50,
        height: 50,
      }}
      icon={<VerticalAlignTopOutlined />}
      tooltip="Quay lên đầu trang"
      visibilityHeight={200}
      duration={500}
    />
  );
};

export default BackToTop;