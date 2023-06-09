import React from "react";

export const Button = ({ ...props }) => {
  return <button type="button" className="btn btn-primary" {...props} />;
};
