import {React, useState} from "react";

const TypeInput = (props) => {
  return (
    <div className={props.size}>
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="sm:mt-2">
        <select
          name="country"
          autoComplete="country-name"
          value={props.office}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={(e) => props.setOffice(e.target.value)}
        >
          <option value="CP">Centralize Office</option>
          <option value="TP">Trading Office</option>
        </select>
      </div>
    </div>
  );
};

export default TypeInput;
