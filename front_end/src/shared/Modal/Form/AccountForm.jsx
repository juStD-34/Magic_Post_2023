import React from "react";
import Input from "../components/Input";

const AccountForm = (props) => {
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
                    Manager Account
                  </h2>

                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input label="First Name" size="sm:col-span-3" type="text" value={props.staffId}/>

                    <Input label="Last Name" size="sm:col-span-3" type="text" value={props.staffId}/>

                    <Input label="Username" size="sm:col-span-3" type="text" value={props.usrname}/>

                    <Input label="Password" size="sm:col-span-3" type="password" value={props.password}/>

                    <Input label="Phone" size="sm:col-span-4" type="phone" value={props.phone}/>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-x-6">
                <button
                  onClick={() => props.setShowModal(false)}
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={() => props.setShowModal(false)}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
