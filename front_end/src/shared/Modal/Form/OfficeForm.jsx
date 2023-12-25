import React from "react";
import Input from "../components/Input";
import TypeInput from "../components/TypeInput";

const OfficeForm = (props) => {
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
                    />

                    <Input
                      label="Manager's First Name"
                      size="sm:col-span-3"
                      type="text"
                    />
                    <Input
                      label="Manager's Last Name"
                      size="sm:col-span-3"
                      type="text"
                    />
                    <Input
                      label="Manager username"
                      size="sm:col-span-3"
                      type="text"
                    />
                    <Input
                      label="Manager password"
                      size="sm:col-span-3"
                      type="password"
                    />

                    <Input
                      label="Manager's Phone"
                      size="sm:col-span-3"
                      type="phone"
                    />

                    <TypeInput label="Type" size="sm:col-span-3" />

                    <Input label="Address" size="sm:col-span-6" type="text" />
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
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={() => {
                    props.setShowModal(false);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeForm;
