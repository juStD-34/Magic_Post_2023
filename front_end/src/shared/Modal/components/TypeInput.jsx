import {React, useState} from "react";

const TypeInput = (data) => {
  const {setType} = require("../../../Authorization/Info")
  const handleSelectChange = (event) => {
    // Làm bất kỳ xử lý nào bạn cần khi giá trị thay đổi ở đây
    console.log(event.target.value); // Ví dụ: Log giá trị được chọn ra console
    setType(event.target.value);
  };
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
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={handleSelectChange}
        >
          <option>Centralize Office</option>
          <option>Trading Office</option>
        </select>
      </div>
    </div>
  );
};

export default TypeInput;
