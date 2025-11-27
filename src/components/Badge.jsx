import React from 'react';
import clsx from 'clsx';

export function Badge({ 
  children, 
  variant = 'default',
  className 
}) {
  const variantClasses = {
    default: 'bg-muted text-muted-foreground',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    disabled: 'bg-gray-100 text-gray-400 cursor-not-allowed',
    limitede: 'bg-yellow-400 text-white',
    outline: 'border border-blue-600 text-blue-600 bg-white',
    heatlh: 'bg-red-600 text-white',
    fitness: 'bg-green-600 text-white',
    eco: 'bg-green-800 text-white',
  };
  
  return (
    <span className={clsx(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  );
}
export default Badge;