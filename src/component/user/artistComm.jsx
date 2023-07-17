import { useState } from "react";
import Navbar from "../home/navbar.component";
import Footer from "../home/footer.component";
import { GrPrevious, GrNext } from "react-icons/gr";
export default function ArtistComm() {
  const [activeTab, setActiveTab] = useState("description");

  const [showImage, setShowImage] = useState(0);
  const images = [
    { id: 1, imageSrc: "/image/fullbody2.jpg" },
    { id: 2, imageSrc: "/image/fullbody3.jpg" },
    { id: 3, imageSrc: "/image/fullbody4.jpg" },
    { id: 4, imageSrc: "/image/fullbody5.jpg" },
    { id: 5, imageSrc: "/image/fullbody7.jpg" },
  ];
  const handleNextClick = () => {
    const lastImages = showImage === images.length - 1;
    const newIndex = lastImages ? 0 : showImage + 1;
    setShowImage(newIndex);
  };
  const handlePrevClick = () => {
    const firstImages = showImage === 0;
    const newIndex = firstImages ? images.length - 1 : showImage - 1;
    setShowImage(newIndex);
  };
  const indicator = (id) => {
    setShowImage(id);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <section className=" bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
      <Navbar />
      <div className="container py-32 px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden relative rounded-lg group">
                  <img
                    src={images[showImage].imageSrc}
                    className="w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500"
                  />
                  <button
                    onClick={handlePrevClick}
                    className="prev hidden group-hover:block text-xl rounded-full p-2 bg-black/20 text-white absolute left-3 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer"
                  >
                    <GrPrevious />
                  </button>
                  <button
                    onClick={handleNextClick}
                    className="next hidden group-hover:block text-xl rounded-full p-2 bg-black/20 text-white absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer"
                  >
                    <GrNext />
                  </button>
                </div>
              </div>
              <div className="mt-2 w-full lg:order-1 lg:flex-shrink-0">
                <div className="flex items-start ">
                  {images.map((image) => (
                    <button
                      onClick={() => indicator(image.id - 1)}
                      key={image.id}
                      type="button"
                      className="flex-0 justify-between mx-1 aspect-square mb-3 h-32  overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={image.imageSrc}
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <h2 className="text-4xl font-black mb-1">
                  Full Body Commission
                </h2>
                <span className="block text-sm font-bold mb-5">Hanyonn</span>
                <div className="flex items-center mb-4">
                  <button className="inline-block mr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                        fill="#474BC5"
                      ></path>
                    </svg>
                  </button>
                  <button className="inline-block mr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                        fill="#474BC5"
                      ></path>
                    </svg>
                  </button>
                  <button className="inline-block mr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                        fill="#474BC5"
                      ></path>
                    </svg>
                  </button>
                  <button className="inline-block mr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                        fill="#474BC5"
                      ></path>
                    </svg>
                  </button>
                  <button className="inline-block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57429 0.42926 9.19098 0.682715 9.02267 1.07518L6.74005 6.41696L0.966583 6.94112C0.542377 6.98033 0.184092 7.26705 0.0524051 7.67203C-0.0792816 8.07701 0.0423341 8.5212 0.363235 8.80121L4.7266 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85249 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.342 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203Z"
                        fill="#E8E8F8"
                      ></path>
                      <defs>
                        <rect width="20" height="20" fill="white"></rect>
                      </defs>
                    </svg>
                  </button>
                </div>
                <span className="block text-2xl font-black text-green-500 mb-4">
                  ??? VND
                </span>
                <p className="font-bold mb-2">
                  Một số tranh demo của mình, mức giá của tranh phụ thuộc vào yêu cầu của các bạn
                </p>
                <ul className="list-disc list-inside font-medium mb-6">
                  <li>
                  Mình thạo vẽ nữ hơn nam, những char nam quá cầu kì thì mình xin rút ạ
                  </li>
                  <li>
                   Mình không nhận vẽ những: mecha,
                  hentai,...
                  </li>
                  <li> Mình sẽ gởi sketch cho bạn 3-4 lần, nếu vẫn
                  không ưng thì mình xin rút và hoàn lại bạn 80% số tiền
                  Deadline tầm 1-2 tuần nha mọi người (đa số 3 ngày vẽ xong)
                  </li>
                </ul>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                    <span className="block text-sm font-black mb-2">
                      Amount
                    </span>
                    <div className="flex h-12 w-24 px-2 items-center justify-between border-2 border-black rounded-md">
                      <button className="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                        <div className="h-px mx-px w-full bg-white"></div>
                      </button>
                      <input
                        className="w-10 text-center text-sm font-bold placeholder-black text-black outline-none"
                        type="number"
                        placeholder="2"
                      />
                      <button className="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                        <div className="relative h-full w-full py-px">
                          <div className="absolute top-1/2 left-0 h-px w-full bg-white"></div>
                          <div className="inline-block max-w-max mx-auto h-full bg-white">
                            <div className="inline-block px-px"></div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto">
                    <span className="block text-sm font-black mb-2">Size</span>
                    <div className="group relative h-12 w-32 border-2 border-black rounded-md overflow-hidden">
                      <select
                        className="w-full h-full px-4 text-sm font-bold appearance-none outline-none"
                        name=""
                        id=""
                      >
                        <option value="1">Small</option>
                        <option value="1">Medium</option>
                        <option value="1">Large</option>
                      </select>
                      <span className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-indigo-500">
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap items-center -mx-2 mb-6">
                  <div className="flex-grow-1 w-full px-2 mb-4">
                    <a
                      className="group relative inline-block h-12 w-full -mb-2 bg-blueGray-900 rounded-md"
                      href="https://www.facebook.com/qanhtuxuyen?mibextid=LQQJ4d"
                      target="_blank" rel="noreferrer"
                    >
                      <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                        <div className="flex h-full w-full items-center justify-center bg-violet-500 border-2 border-black rounded-md">
                          <span className="text-base font-black text-white">
                            Liên hệ với Artist
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-auto px-2 mb-4">
                    <a
                      className="inline-flex items-center justify-center w-12 h-12 text-black hover:text-indigo-500 border-2 border-black hover:border-indigo-500 rounded-md transition duration-200"
                      href="#"
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="w-auto px-2 mb-4">
                    <a
                      className="inline-flex items-center justify-center w-12 h-12 text-black hover:text-indigo-500 border-2 border-black hover:border-indigo-500 rounded-md transition duration-200"
                      href="#"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.36 12.7299C19.99 12.7299 19.68 12.45 19.64 12.08C19.4 9.87995 18.22 7.89995 16.4 6.63995C16.07 6.40995 15.99 5.95995 16.22 5.62995C16.45 5.29995 16.9 5.21995 17.23 5.44995C19.4 6.95995 20.8 9.31995 21.09 11.93C21.13 12.33 20.84 12.6899 20.44 12.7299C20.41 12.7299 20.39 12.7299 20.36 12.7299Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M3.74001 12.78C3.72001 12.78 3.69001 12.78 3.67001 12.78C3.27001 12.74 2.98001 12.38 3.02001 11.98C3.29001 9.36996 4.67001 7.00996 6.82001 5.48996C7.14001 5.25996 7.60001 5.33996 7.83001 5.65996C8.06001 5.98996 7.98001 6.43996 7.66001 6.66996C5.86001 7.94996 4.69001 9.92996 4.47001 12.12C4.43001 12.5 4.11001 12.78 3.74001 12.78Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M15.99 21.1C14.76 21.69 13.44 21.99 12.06 21.99C10.62 21.99 9.24998 21.67 7.96998 21.02C7.60998 20.85 7.46998 20.41 7.64998 20.05C7.81998 19.69 8.25998 19.55 8.61998 19.72C9.24998 20.04 9.91998 20.26 10.6 20.39C11.52 20.57 12.46 20.58 13.38 20.42C14.06 20.3 14.73 20.09 15.35 19.79C15.72 19.62 16.16 19.76 16.32 20.13C16.5 20.49 16.36 20.93 15.99 21.1Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M12.05 2.01001C10.5 2.01001 9.22998 3.27001 9.22998 4.83001C9.22998 6.39001 10.49 7.65001 12.05 7.65001C13.61 7.65001 14.87 6.39001 14.87 4.83001C14.87 3.27001 13.61 2.01001 12.05 2.01001Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M5.05001 13.87C3.50001 13.87 2.23001 15.13 2.23001 16.69C2.23001 18.25 3.49001 19.51 5.05001 19.51C6.61001 19.51 7.87001 18.25 7.87001 16.69C7.87001 15.13 6.60001 13.87 5.05001 13.87Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.95 13.87C17.4 13.87 16.13 15.13 16.13 16.69C16.13 18.25 17.39 19.51 18.95 19.51C20.51 19.51 21.77 18.25 21.77 16.69C21.77 15.13 20.51 13.87 18.95 13.87Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <span className="block text-sm font-black mb-2">
                  Share on Social Media
                </span>
                <div>
                  <a
                    className="inline-block text-green-500 hover:text-indigo-500 mr-6"
                    href="#"
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                    fill="white"
                  ></path>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                    fill="currentColor"
                  ></path>

                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="border-b border-gray-600">
              <nav className="flex gap-4">
                <button
                  onClick={() => handleTabClick("description")}
                  className={`border-b-4 ${
                    activeTab === "description" ? "border-blue-500" : null
                  } transition duration-500 transform py-4 text-xl font-medium text-gray-900`}
                >
                  {" "}
                  Ghi chú{" "}
                </button>

                <button
                  onClick={() => handleTabClick("review")}
                  className={`border-b-4 ${
                    activeTab === "review" ? "border-purple-500" : null
                  } inline-flex items-center border-b-2 border-transparent py-4 text-xl font-medium text-gray-900 transition duration-500`}
                >
                  Đánh giá
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                    {" "}
                    1,209{" "}
                  </span>
                </button>
              </nav>
            </div>

            {activeTab === "description" && (
              <div
                className={`mt-8 sm:mt-12 tab ${
                  activeTab === "description" ? "active" : ""
                }`}
              >
                <h1 className="text-3xl font-bold">
                  {" "}
                  ✦ Phương thức thanh toán{" "}
                </h1>
                <div className="my-4 border-2 p-5 border-black w-fit flex -mx-2">
                  <div className="px-2">
                    <label
                      htmlFor="type1"
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type1"
                      />
                      <img src="/image/mbBankLogo.png" className="h-8 ml-3" />
                    </label>
                  </div>
                  <div className="px-2">
                    <label
                      htmlFor="type2"
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type2"
                      />
                      <img src="/image/momoLogo.png" className="h-8 ml-3" />
                    </label>
                  </div>
                </div>
                <p className="mt-4">
                  ✦ Banking, momo <br />
                </p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <h1 className="mt-8 text-3xl font-bold">✦ Hướng dẫn sử dụng</h1>
                <p className="mt-4">
                  Cách thức hoạt động: Quy trình vận hành tác phẩm nghệ thuật
                  của Hanyonn Commissions rất đơn giản và không rắc rối, đồng
                  thời bạn được đảm bảo nhận lại tác phẩm nghệ thuật hoặc tiền
                  của mình. <br />
                  <h1 className="font-bold"> Bước 1: </h1>
                  Chọn những gì bạn muốn Artist của mình đưa vào Comm của bạn.{" "}
                  <br />
                  <h1 className="font-bold"> Bước 2: </h1> Sau khi đặt hàng,
                  tụi mình sẽ gửi cho bạn một email để nhận ảnh tham khảo và
                  liên lạc với với Artist của bạn. <br />
                  <p className="text-red-600 font-bold">
                    ⚠️ Vui lòng kiểm tra thư mục Spam nếu bạn không nhận được
                    email trong vòng 10 phút! ⚠️
                  </p>
                  <h1 className="font-bold"> Bước 3: </h1> Gửi ảnh tham khảo và
                  order của bạn. Tụi mình sẽ liên hệ qua email để xác nhận họa
                  sĩ đang thực hiện tác phẩm, gửi cho bạn bản nháp để bạn xem
                  xét và gửi tác phẩm đã hoàn thành. Tác phẩm cuối cùng của bạn
                  sẽ đến dưới dạng hình ảnh kỹ thuật số, sẵn sàng để bạn đặt làm
                  ảnh bìa trên mạng xã hội, hình đại diện hồ sơ, hình nền máy
                  tính, màn hình khóa thiết bị di động, v.v. <br />
                  Mọi thắc mắc xin gửi về email phamthong2532003@gmail.com và
                  tụi mình sẽ liên hệ lại với bạn một cách sớm nhất
                </p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <h1 className="font-bold text-3xl">
                  {" "}
                  ✦ Cam kết của tụi mình{" "}
                </h1>
                <p className="mt-4">
                  Bạn được bảo đảm hoàn lại tiền của tụi mình. Nhận lại tranh
                  hoặc tiền của bạn. Không vấn đề gì cho bạn
                  khi bạn chọn Hanyonn Commissions ! Ngoài ra, team của mình sẽ hướng
                  dẫn bạn từng bước để toàn bộ quá trình diễn ra suôn sẻ và VUI
                  VẺ!
                </p>
              </div>
            )}
            {activeTab === "review" && (
              <div
                className={`mt-8 sm:mt-12 tab ${
                  activeTab === "review" ? "active" : ""
                }`}
              >
                <h1 className="text-3xl font-bold">
                  Xin hãy để lại đánh giá của bạn{" "}
                </h1>
                <div className="mt-5 p-10 border-4 border-purple-400">
                  <h1 className="font-bold text-xl mb-5">
                    {" "}
                    Hãy trở thành khách hàng đầu tiên đánh giá{" "}
                  </h1>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Bạn cảm thấy chất lượng như thế nào ?
                  </label>
                  <select
                    id="countries"
                    className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option>Đánh giá...</option>
                    <option>Tệ</option>
                    <option>Không tốt</option>
                    <option>Bình thường</option>
                    <option>Tốt</option>
                    <option>Rất tốt</option>
                  </select>

                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Bình luận của bạn
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                  <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Tên của bạn
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder="abcd@gmail.com"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
