import React from "react";
import Axios from "axios";

const ConfirmDelete2 = ({username, password, setShowModal, change, setChange}) => {

  const Delete = (e) => {
    e.preventDefault();
    setChange(!change);
    Axios.post("http://localhost:3001/deleteE", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        console.log('FAILED');
      }else{
        console.log('SUCCESS');
      }
    })
  }
  return (
    <div className="flex my-6 sm:my-auto mx-12 sm:mx-96 fixed inset-0 max-h-sm h-[60%] z-50 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-sm">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form>
              <div className="space-y-12">
                <div className=" pb-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Warning
                  </h2>

                  <p>
                    Are you sure you want to delete this office?
                  </p>
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
                  className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={Delete}
                >
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete2;
