import React from "react";
import clsx from 'clsx';

export function Label({ 
  children, 
  htmlFor,
  className 
}) {
  return (
    <label 
      htmlFor={htmlFor}
      className={clsx('text-sm font-medium text-slate-900 mb-1 block', className)}
    >
      {children}
    </label>
  );
}
export default Label;