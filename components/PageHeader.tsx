import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <Card className="mb-12 bg-gradient-to-r from-primary/20 to-primary/10">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold text-primary">{title}</CardTitle>
        <CardDescription className="text-xl mt-4">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PageHeader;