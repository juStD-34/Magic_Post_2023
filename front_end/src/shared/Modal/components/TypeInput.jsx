import React from "react";

const TypeInput = (data) => {
  return (
    <div className={data.size}>
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {data.label}
      </label>
      <div className="sm:mt-2">
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>Centralize Office</option>
          <option>Trading Office</option>
        </select>
      </div>
    </div>
  );
};

export default TypeInput;
