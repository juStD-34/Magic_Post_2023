import {React, useState} from "react";
import Input from "../components/Input";
import TypeInput from "../components/TypeInput";
import Manager from "../../../Users/CEO/Manager";
import Axios from "axios";

const OfficeForm = ({setShowModal, change, setChange}) => {
  const [poName, setPoName] = useState('');
  const [managerFName, setManagerFName] = useState('');
  const [managerLName, setManagerLName] = useState('');
  const [managerUsername, setManagerUsername] = useState('');
  const [managerPassword, setManagerPassword] = useState('');
  const [managerPhone, setManagerPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [SignupStatus, setSignupStatus] = useState("");
  const [office, setOffice] = useState('CP');

  const SignUp = (e) => {
    const {getType} = require("../../../Authorization/Info");
    const type = getType();
    console.log(type);
    e.preventDefault();
    Axios.post("http://localhost:3001/registerMP", {
      poName: poName,
      managerFName: managerFName,
      managerLName: managerLName,
      managerUsername: managerUsername,
      managerPassword: managerPassword,
      managerPhone: managerPhone,
      type: office,
      Address: Address,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setSignupStatus(response.data.message);
      }else{
        setSignupStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
    setChange(!change);
  }

  const colorStyle = {
    fontSize: '15px',
    textAlign: 'center',
    marginTop: '20px'
  };
  
  const textStyle = {
    red: {
      ...colorStyle,
      color: 'red'
    },
    green: {
      ...colorStyle,
      color: 'green'
    }
  };

  return (
    <div className="flex my-2 sm:my-16 mx-8 sm:mx-96 fixed inset-0 max-h-sm h-[60%] z-50 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-sm">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form>
              <div className="space-y-12">
                <div className=" pb-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Add Offices
                  </h2>

                  <div className="sm:mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input
                      label="Office's Name"
                      size="sm:col-span-4"
                      type="text"
                      value={poName}
                      onChange={setPoName}
                    />

                    <Input
                      label="Manager's First Name"
                      size="sm:col-span-3"
                      type="text"
                      value={managerFName}
                      onChange={setManagerFName}
                    />
                    <Input
                      label="Manager's Last Name"
                      size="sm:col-span-3"
                      type="text"
                      value={managerLName}
                      onChange={setManagerLName}
                    />
                    <Input
                      label="Manager username"
                      size="sm:col-span-3"
                      type="text"
                      value={managerUsername}
                      onChange={setManagerUsername}
                    />
                    <Input
                      label="Manager password"
                      size="sm:col-span-3"
                      type="password"
                      value={managerPassword}
                      onChange={setManagerPassword}
                    />

                    <Input
                      label="Manager's Phone"
                      size="sm:col-span-3"
                      type="phone"
                      value={managerPhone}
                      onChange={setManagerPhone}
                    />

                    <TypeInput label="Type" size="sm:col-span-3" office={office} setOffice={setOffice}/>

                    <Input label="Address" size="sm:col-span-6" type="text" value={Address} onChange={setAddress}/>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-x-6">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={SignUp}
                >
                  Add
                </button>
                <h1 style={SignupStatus === "Account already exists" ? textStyle.red : textStyle.green}>{SignupStatus}</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeForm;
