import React from "react";

const Input = (data) => {
  return (
    <div className={data.size}>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {data.label}
      </label>
      <div className="sm:mt-2">
        <input
          value={data.value}
          type={data.type}
          autoComplete={data.type}
          className="block w-full rounded-md p-3 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          onChange={(e) => data.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
