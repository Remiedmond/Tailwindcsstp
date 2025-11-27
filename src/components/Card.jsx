import React from "react";
import clsx from 'clsx';

export function Card({ children, className }) {
  return (
    <div className={clsx('bg-red border border-border rounded-xl shadow-sm', className)}>
      {children}
    </div>
  );
}

// Sous-composant pour le header de la carte
export function CardHeader({ children, className }) {
  return (
    <div className={clsx('px-5 pt-5 pb-3 flex items-center justify-between gap-2', className)}>
      {children}
    </div>
  );
}

// Sous-composant pour le body de la carte
export function CardBody({ children, className }) {
  return (
    <div className={clsx('px-5 pb-5', className)}>
      {children}
    </div>
  );
}


 export default Card;