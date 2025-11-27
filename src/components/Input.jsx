import React from "react";
import clsx from 'clsx';

export function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className,
  id,
  name
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={clsx(
        'block w-full rounded-md border border-border bg-white px-3 py-2 text-sm',
        'text-slate-900 shadow-sm transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    />
  );
}

export default Input;