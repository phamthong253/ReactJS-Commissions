// index.component.js
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import instance from "../../interceptor/axios";
import useAuth from "../hooks/useAuth.component";
import SearchBar from "./searchBar.component";

export default function Gallery() {
  const commissionId = useParams();
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const [infoList, setInfoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const { loading, setLoading } = useAuth();
  useEffect(() => {
    setLoading(true);
    instance.get("/commission").then((response) => {
      setInfoList(response.data.data);
      setLoading(false);
    });
  }, []);
  const handleImageClick = (image, name, type, price) => {
    setSelectedImage(image);
    setSelectedName(name);
    setSelectedType(type);
    setSelectedPrice(price);
    setShowModal(true);
  };

  const goBack = () => {
    setIsDelete(false);
    navigate("/gallery");
  };

  const deleteCommission = () => {
    instance
      .delete(`/commission/${commissionId.id}`)
      .then(() => {
        setIsDelete(false);
        setInfoList(
          infoList.filter((commission) => commission.id !== commissionId.id)
        );
        navigate("/gallery");
      })
      .catch((err) => {
        if (commissionId.id === undefined) {
          console.log("da xay ra loi", err);
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
      
      {/* Search  */}
      <SearchBar dataFromParent={infoList} />
      {loading ? (
        <div className="grid gap-10 mt-10">
          <div
            role="status"
            className="max-w-sm w-full border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4 space-x-3">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 w-full">
            {infoList.map((val) => (
              <div key={val.id} className="relative mx-auto w-full">
                <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                  <div className="shadow p-4 rounded-lg bg-white">
                    <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                      <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                        <img
                          onClick={() =>
                            handleImageClick(
                              val.imageSrc,
                              val.name,
                              val.type.name,
                              val.price
                            )
                          }
                          src={val.imageSrc}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2
                        className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                        title="New York"
                      >
                        {val.name}
                      </h2>
                      <p
                        className="mt-2 text-sm text-gray-800 line-clamp-1"
                        title="New York, NY 10004, United States"
                      >
                        {val.type.name}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                      <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                        <button
                          type="button"
                          className="inline-block rounded bg-sky-600 border px-6 pb-2 pt-2.5 ml-16 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          {" "}
                          <Link to={`/edit/${val.id}`}>Edit</Link>
                        </button>
                      </div>
                      <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                        <button
                          type="button"
                          onClick={() => setIsDelete(true)}
                          className="inline-block text-white rounded bg-red-500 border px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <Link to={`/gallery/${val.id}`}>Delete</Link>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 mt-8">
                      <div className="flex items-center">
                        <div className="relative">
                          <img
                            src="/image/avatarUser.jpg"
                            className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"
                          />
                        </div>

                        <p className="ml-2 text-gray-800 line-clamp-1">
                          Hanyonn
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                          <span className="text-lg">{val.price}</span> VND
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        {showModal && (
          <div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-current opacity-20"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8 ">
                <div className="relative w-full max-w-5xl p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="mt-3 w-full sm:flex ">
                    <div className="flex items-center justify-center flex-none w-[350px] mx-auto bg-red-100 rounded-full">
                      <img src={selectedImage} />
                    </div>
                    <div className="mt-12 text-center sm:ml-7 sm:text-left">
                      <h4 className="text-5xl leading-10 font-medium text-gray-800">
                        {selectedName}
                      </h4>
                      <h4 className="text-3xl mt-5 leading-10 font-medium text-gray-800">
                        {selectedType}
                      </h4>
                      <p className="mt-2 text-xl leading-relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <span className=" text-xl leading-10 text-medium">
                        {selectedPrice}
                      </span>
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-sky-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Xác nhận
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {isDelete && (
          <>
            <div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-current opacity-20"></div>
                <div className="relative mx-auto my-auto w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-6 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this commissions ?
                      </h3>
                      <button
                        onClick={deleteCommission}
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                      >
                        Yes, I`m sure
                      </button>
                      <button
                        onClick={goBack}
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
