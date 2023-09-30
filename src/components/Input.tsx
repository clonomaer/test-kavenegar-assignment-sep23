import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-primary-300"
      {...rest}
    />
  );
};

export default Input;
