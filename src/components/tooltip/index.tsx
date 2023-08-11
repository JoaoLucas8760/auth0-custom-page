import React, { ReactNode } from 'react';

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode;
  style?: any;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  className,
  children,
  style,
}) => {
  return (
    <div style={style}>
      {children}
      <span
        style={{
          position: 'absolute',
          width: '10rem', // 40 em rem
          backgroundColor: '#EF4444', // Cor vermelha
          padding: '0.5rem', // 2 em rem
          borderRadius: '0.375rem', // rounded-md
          fontSize: '0.875rem', // text-sm
          color: 'white',
          textAlign: 'center',
          bottom: 'calc(100% + 0.1875rem)', // bottom-[calc(100%+0.75rem)]
          left: '-140%', // -left-[140%]
          transform: 'translateX(-50%)', // -translate-x-1/2
          opacity: '0',
          transitionDuration: '300ms',
          transitionProperty: 'bottom, left, opacity', // transition-all
        }}
      >
        {title}
      </span>
    </div>
  );
};
