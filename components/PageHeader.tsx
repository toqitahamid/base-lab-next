import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-6" style={{ backgroundColor: '#faf9f6' }}>
      <div className="text-center py-8 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;