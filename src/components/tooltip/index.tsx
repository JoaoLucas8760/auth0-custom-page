import React, { ReactNode } from 'react';

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <span className="absolute w-40 bg-red-500 p-2 rounded-md text-sm text-white text-center bottom-[calc(100%+0.75rem)] -left-[140%] -translate-x-1/2 opacity-0 duration-300 transition-all">
        {title}
      </span>
    </div>
  );
};
