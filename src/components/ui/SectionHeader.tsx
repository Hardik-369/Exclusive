import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <div className="space-y-4 mb-10">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-brand-primary rounded-sm" />
        <span className="text-brand-primary font-bold">{subtitle}</span>
      </div>
      <div className="flex justify-between items-end">
        <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default SectionHeader;
