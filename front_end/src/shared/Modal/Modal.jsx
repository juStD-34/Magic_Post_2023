import React, { useState } from "react";
import OfficeForm from "./Form/OfficeForm";
import AccountForm from "./Form/AccountForm";
import EditForm from "./Form/EditForm";
import StatisticForm from "./Form/StatisticForm";

import { Button } from "flowbite-react";
import ConfirmDelete from "./Form/ConfirmDelete";

function Modal(data) {
  const [showModal, setShowModal] = useState(false);
  var modal;
  var labeL;
  switch (data.label) {
    case "Account":
      modal = (
        <AccountForm
          setShowModal={setShowModal}
          staffId={data.staffId}
          password={data.password}
          usrname={data.usrname}
          phone={data.phone}
        />
      );
      labeL = data.label;
      break;
    case "Add Offices":
      modal = <OfficeForm setShowModal={setShowModal} />;
      labeL = data.label;
      break;
    case "Edit":
      modal = (
        <EditForm
          setShowModal={setShowModal}
          name={data.name}
          address={data.address}
          phone={data.phone}
        />
      );
      labeL = null;
      break;
    case "Delete":
      modal = <ConfirmDelete setShowModal={setShowModal} />;
      labeL = null;
      break;
    case "Print":
      modal = <StatisticForm setShowModal={setShowModal} />;
      labeL = null;
      break;
    default:
      break;
  }
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className={`flex items-center gap-4 ${data.color} shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        size="sm"
      >
        {data.icon}
        {labeL}
      </Button>
      {showModal && (
        <>
          {modal}
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) }
    </>
  );
}

export default Modal;
