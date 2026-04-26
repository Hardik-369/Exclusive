import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../../types';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

interface CategoryCardProps {
  category: Category;
  isActive?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive }) => {
  // @ts-ignore
  const Icon = Icons[category.icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "border border-gray-200 rounded-md p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:bg-brand-primary hover:border-brand-primary group",
        isActive && "bg-brand-primary border-brand-primary text-white"
      )}
    >
      <div className={cn("transition-colors group-hover:text-white", isActive ? "text-white" : "text-black")}>
        {Icon && <Icon className="w-10 h-10" />}
      </div>
      <span className={cn("text-base font-medium transition-colors group-hover:text-white", isActive ? "text-white" : "text-black")}>
        {category.name}
      </span>
    </motion.div>
  );
};

export default CategoryCard;
