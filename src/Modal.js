import React from "react";

const Modal = ({ toggleModal, modalId, title, children, onReset }) => {
  return (
    <div
      id={modalId}
      className="z-50 myModal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content text-left">
          <div
            className="flex justify-between items-center p-4  
          modal-head mb-3 text-white"
          >
            <p className="text-xl">{title}</p>
            <div
              onClick={(event) => {
                toggleModal(modalId);
                onReset();
              }}
              className="modal-close bg-red-500  cursor-pointer z-50"
            >
              <svg
                className="text-white fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="px-8 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
