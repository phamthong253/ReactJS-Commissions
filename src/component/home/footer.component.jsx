import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiPixiv } from "react-icons/si";
import { Link } from "react-router-dom";
import SuccessModal from "../dialog/successModal.component";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  
  if(showModal){
    setTimeout(() => setShowModal(false), 3000)
  }
  
  return (
    // <!--Footer container-->
    <>
      <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
        <div className="container p-6 text-neutral-800 dark:text-neutral-200">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium uppercase">
                Let us know your experience
              </h5>
              <div className="relative mb-3">
                <input
                  type="email"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  htmlFor="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>
            </div>

            <div className="mb-6 flex justify-between md:mb-0">
              <div className="mb-4">
                <h2 className="mb-2 font-medium uppercase">Follow us:</h2>
                <ul className="flex mx-auto">
                  <li className="p-4">
                    <Link to={"/"} className="">
                      <FaFacebook className="text-3xl" />
                    </Link>
                  </li>
                  <li className="p-4">
                    <Link to={"/"} className="">
                      <FaInstagram className="text-3xl" />
                    </Link>
                  </li>
                  <li className="p-4">
                    <Link to={"/"} className="">
                      <FaTwitter className="text-3xl" />
                    </Link>
                  </li>
                  <li className="p-4 ">
                    <Link to={"/"} className="">
                      <SiPixiv className="text-3xl" />
                    </Link>
                  </li>
                  <li className="p-4 transition duration-150 ease-out hover:ease-in" onClick={() => setShowModal(true)}>
                    Click here:
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          {showModal ? (
            <>
              <SuccessModal/>
            </>
          ) : null}
        </div>
        

        {/* <!--Copyright section--> */}
        <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Inspire from artcorgi.com
        </div>
      </footer>
    </>
  );
}
