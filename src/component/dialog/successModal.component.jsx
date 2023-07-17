import { BsCheckCircle } from "react-icons/bs";

export default function SuccessModal() {
  return (
    <>
      <div className="justify-center ease-out duration-1000 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-16  mx-auto max-w-3xl transition-all ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center text-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-emerald-500 font-semibold text-center">
                Successfully
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 animate-bounce text-emerald-600 flex justify-center text-[5rem] text-center leading-relaxed">
                <BsCheckCircle />
              </p>
              <p className="text-center">
                Thao tác thành công, xin vui lòng đợi trong giây lát !
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
