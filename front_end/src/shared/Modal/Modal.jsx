import React, { useState } from "react";
import OfficeForm from "./Form/OfficeForm";
import AccountForm2 from "./Form/AccountForm2";
import AccountForm from "./Form/AccountForm";
import EditForm from "./Form/EditForm";
import StatisticForm from "./Form/StatisticForm";
import SuccessForm from "./Form/SuccesForm";

import { Button } from "flowbite-react";
import ConfirmDelete from "./Form/ConfirmDelete";
import ConfirmDelete2 from "./Form/ConfirmDelete2";

// function Modal(data) {
function Modal({label, password, icon, color, username, name, address, phone, change, setChange,  inform, tick }) {
  const [showModal, setShowModal] = useState(false);

  var modal;
  var labeL;
  const close = () => {
    if (label=="Add") setShowModal(false);
  };

  switch (label) {
    case "Account":
      modal = (
        <AccountForm2
          setShowModal={setShowModal}
          password={password}
          username={username}
          change={change}
          setChange={setChange}
        />
      );
      labeL = label;
      break;
  case "Account2":
      modal = (
        <AccountForm
          setShowModal={setShowModal}
          password={password}
          username={username}
          change={change}
          setChange={setChange}
        />
      );
      labeL = label;
      break;
    case "Add Offices":
      modal = (<OfficeForm setShowModal={setShowModal} change={change} setChange={setChange}/>);
      labeL = label;
      break;
    case "Edit":
      modal = (
        <EditForm
          setShowModal={setShowModal}
          Name={name}
          Address={address}
          phone={phone}
          change={change}
          setChange={setChange}
        />
      );
      labeL = null;
      break;
    case "Delete":
      modal = (
        <ConfirmDelete
          setShowModal={setShowModal}
          change={change}
          setChange={setChange}
          name={name}
          address={address}
          phone={phone}
        />
      );
      labeL = null;
      break;
    case "Delete2":
      modal = (
        <ConfirmDelete2
          setShowModal={setShowModal}
          change={change}
          setChange={setChange}
          username={username}
          password={password}
        />
      );
      labeL = null;
      break;
    case "Print":
      modal = <StatisticForm setShowModal={setShowModal} />;
      labeL = null;
      break;
    case "Add":
      modal = <SuccessForm inform={inform} tick={tick} onClick={()=>console.log("clicked")}/>;
      labeL = label;
      break;
    default:
      break;
  }
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className={`flex items-center gap-4 ${color} shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        size="sm"
      >
        {icon}
        {labeL}
      </Button>
      {showModal && (
        <div onClick={close}>
          {modal}
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
          ></div>
        </div>
      ) }
    </>
  );
}

export default Modal;
