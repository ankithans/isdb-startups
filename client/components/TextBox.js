import React from "react";

export default function TextBox({
  id,
  label,
  type,
  autoComplete,
  onChange,
  value,
}) {
  return (
    <div>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <input
        id={id}
        name={type}
        type={type}
        autoComplete={autoComplete}
        required
        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        placeholder={label}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
