import React from "react";
import { MdErrorOutline } from "react-icons/md";

const ErrorPopup = ({message}) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_errorPopup" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg py-3 flex items-center justify-center space-x-2 text-center text-gray-500">
            <MdErrorOutline size={24} />
            <span>{message}</span>
          </h3>
        </div>
      </dialog>
    </div>
  );
};

export default ErrorPopup;
