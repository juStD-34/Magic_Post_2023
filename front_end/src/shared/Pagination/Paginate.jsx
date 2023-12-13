import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Datarow from "./Datarow";

export default function Paginate({data}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Datarow currentItems={currentItems}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="PREVIOUS"
        renderOnZeroPageCount={null}
        className="flex flex-row justify-end gap-2 mt-4"
        breakClassName="text-xs text-black font-medium hover:text-blue-700 hover:font-semibold px-2 py-1 rounded-md  border-2 border-gray-200"
        pageClassName="text-xs justify-between items-center h-fit text-black font-medium hover:text-blue-700 hover:font-semibold px-2 py-1 rounded-md  border-2 border-gray-200"
        previousClassName="text-xs text-black font-medium hover:text-blue-700 hover:font-semibold px-2 py-1 rounded-md  border-2 border-gray-200"
        nextClassName="text-xs text-black font-medium hover:text-blue-700 hover:font-semibold px-2 py-1 rounded-md  border-2 border-gray-200"
        activeClassName="active"
      />
    </>
  );
}
