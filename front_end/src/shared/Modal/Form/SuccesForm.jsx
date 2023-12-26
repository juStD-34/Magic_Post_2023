import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";

const SuccessForm = (props) => {
  var icon = props.tick ? (
    <GiConfirmed
      style={{ color: "66BB6A", fontSize: "6em", alignContent: "center" }}
      className="mx-auto"
    />
  ) : (
    <GiCancel
      style={{ color: "EF5350", fontSize: "6em", alignContent: "center" }}
      className="mx-auto"
    />
  );
  return (
    <div className="flex my-6 sm:my-auto mx-12 sm:mx-96 fixed inset-0 max-h-sm h-[60%] z-50 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-sm">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-col space-y-12">
            {icon}
            <p>{props.inform}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessForm;
