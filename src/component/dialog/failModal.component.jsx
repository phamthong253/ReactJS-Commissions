import {SlClose} from "react-icons/sl"
import PropTypes from 'prop-types';
export default function FailModal(props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-10 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex text-center items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-red-500 font-semibold text-center">
                Failed
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 animate-bounce text-red-600 flex justify-center text-[5rem] text-center leading-relaxed">
                <SlClose />
              </p>
              <p className="text-center">
                {props.message}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
FailModal.propTypes = {
  message: PropTypes.string.isRequired, // Add the missing prop type validation
};
