
import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  bgColor?: string;
  titleColor?: string;
  contentClassName?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, bgColor = 'bg-white dark:bg-gray-800', titleColor = 'text-gray-700 dark:text-gray-200', contentClassName = '' }) => {
  return (
    <div className={`${bgColor} p-5 rounded-xl shadow-md dark:shadow-none dark:border dark:border-gray-700 flex flex-col`}>
      <h3 className={`font-bold text-lg mb-4 ${titleColor}`}>{title}</h3>
      <div className={`flex-1 grid ${icon ? 'grid-cols-2' : 'grid-cols-1'} gap-4 items-center ${contentClassName}`}>
        {icon && <div className="flex justify-center items-center">{icon}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;