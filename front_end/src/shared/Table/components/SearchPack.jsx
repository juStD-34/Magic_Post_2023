import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchPack({ TABLE_ROWS, setTABLE_ROWS,change, setChange }) {
  const [code, setCode] = React.useState("");

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setCode(e.target.value);
      setTABLE_ROWS(TABLE_ROWS.filter((item) => item.code.includes(e.target.value)))
    } else {
      setChange(!change);
      setCode("");
    }
  };
  return (
    <div className="sm:ml-auto sm:block relative rounded-md shadow-sm mt-4 sm:m-0">
      <div className="hidden pointer-events-none absolute inset-y-0 left-0 sm:flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-black"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="block rounded-md border-0 outline-none py-1.5 pl-10 pr-15 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        onChange={handleSearch}
        value={code}
      ></input>
    </div>
  );
}
