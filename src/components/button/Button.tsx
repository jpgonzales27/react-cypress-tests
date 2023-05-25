import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { };

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button type="button" className={`btn btn-primary ${className}`} {...props} />
  );
};