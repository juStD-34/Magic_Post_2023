import {React, useState} from "react";
import Input from "../components/Input";
import Axios from "axios";

const AccountForm = ({setShowModal, change, setChange}) => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [SignupStatus, setSignupStatus] = useState("");
  const {getLogin} = require('../../../Authorization/Auth');
  const {getPostOffice} = require('../../../Authorization/Info');
  var role;
  var n = getLogin();
  if(n === 'trade/manager') {
    role = 1;
  } else {
    role = 0;
  }
  const poWorkID = getPostOffice();
  const SignUp = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/registerE", {
      FName: FName,
      LName: LName,
      Username: Username,
      Password: Password,
      Phone: Phone,
      role: role,
      poWorkID: poWorkID,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setSignupStatus(response.data.message);
      }else{
        setSignupStatus("ACCOUNT CREATED SUCCESSFULLY");
        console.log(getLogin());
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
    <div className="text-left flex my-6 sm:my-auto mx-12 sm:mx-96 fixed inset-0 max-h-sm h-[60%] z-50 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-sm">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form>
              <div className="space-y-12">
                <div className=" pb-4">
                  <h2 className="font-semibold leading-7 text-gray-900">
                    Add Employee Account
                  </h2>

                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input label="First Name" size="sm:col-span-3" type="text" value={FName} onChange = {setFName} />

                    <Input label="Last Name" size="sm:col-span-3" type="text" value={LName} onChange = {setLName}/>

                    <Input label="Username" size="sm:col-span-3" type="text" value={Username} onChange = {setUsername}/>

                    <Input label="Password" size="sm:col-span-3" type="password" value={Password} onChange = {setPassword}/>

                    <Input label="Phone" size="sm:col-span-4" type="phone" value={Phone} onChange = {setPhone}/>
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
                  className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={SignUp}
                >
                  Save
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

export default AccountForm;
