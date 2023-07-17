import { useState, useEffect } from "react";
import instance from "../../interceptor/axios";
import useAuth from "../hooks/useAuth.component";
import {GrPrevious, GrNext, GrClose} from "react-icons/gr"

function Collection() {
  const { auth } = useAuth();
  const [infoList, setInfoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    instance.get("/commission").then((response) => {
      setInfoList(response.data.data);
    });
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setSelectedIndex(infoList.length);
    setShowModal(true);
  };

  const handlePrevClick = () => {
    const newIndex = (selectedIndex - 1 + infoList.length) % infoList.length;
    setSelectedImage(infoList[newIndex].imageSrc);
    setSelectedIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (selectedIndex + 1) % infoList.length;
    setSelectedImage(infoList[newIndex].imageSrc);
    setSelectedIndex(newIndex);
  };
  return (
    <div
      className="text-3xl container mx-auto px-5 py-2 lg:px-32 lg:pt-12"
      id="collection"
    >
      <div className="inline-flex items-center justify-center w-full"></div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {auth ? (
          <>
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute w-60 px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              My Collection
            </span>
            {infoList.map((val) => (
              <div key={val.id} className="flex w-1/4 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    onClick={() => handleImageClick(val.imageSrc)}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={val.imageSrc}
                  />
                </div>
              </div>
            ))}
            <div>
              {showModal ? (
                <>
                  <div className="justify-center ease-out duration-1000 items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-16 mx-auto max-w-xl transition-all ">
                      <img className="object-cover" src={selectedImage} />
                    </div>
                      <div className="close fixed top-5 right-10 cursor-pointer" onClick={() => setShowModal(false)}>
                        <GrClose/>
                      </div>
                      <div className="prev fixed left-0 cursor-pointer" onClick={handlePrevClick}>
                        <GrPrevious/>
                      </div>
                      <div className="next fixed right-0 cursor-pointer" onClick={handleNextClick}>
                        <GrNext/>
                      </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </>
        ) : (
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/image/halfbody2.jpeg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/image/halfbody4.jpeg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/image/halfbody8.jpeg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/image/halfbody9.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
