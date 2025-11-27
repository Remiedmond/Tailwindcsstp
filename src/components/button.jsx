import React from 'react';
import clsx from 'clsx';
import Bondecommande from './Bondecommande';
export function Button({ children, variant = 'primary', disabled = false }) {
const base = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
const variants = {
primary: 'bg-primary text-white hover:bg-amber-600',
secondary: 'bg-secondary text-white hover:bg-gray-600',
outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
lose: 'bg-red-500 text-white hover:bg-red-600 line-through',
limitede : 'bg-yellow-400 text-white hover:border hover:border-yellow-500 hover:bg-white hover:text-yellow-500',
bondecommande : 'w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition',
bondecommande2 : 'w-full bg-gray-100 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed',
};
return (
<button
disabled={disabled}
className={clsx(base, variants[variant], disabled && 'opacity-50 cursor-not-allowed')}
>
{children}
</button>
);
}


    export default Button;