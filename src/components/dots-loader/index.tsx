import React from 'react';
import { HTMLAttributes } from 'react';

interface DotsLoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const DotsLoader: React.FC<DotsLoaderProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="text-center w-full">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};
