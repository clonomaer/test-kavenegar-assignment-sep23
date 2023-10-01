import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={
        "bg-primary-500 text-text-primary px-4 py-2 rounded hover:bg-primary-600 focus:outline-none focus:ring focus:border-primary-300 disabled:opacity-30 disabled:cursor-not-allowed " +
        className
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
