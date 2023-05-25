import React from "react";

export const Button = ({ className, ...props }) => {
  return <button type="button" className={`btn btn-primary ${className}`} {...props} />;
};
