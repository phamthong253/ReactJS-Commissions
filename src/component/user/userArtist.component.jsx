import { Link } from "react-router-dom";
import Navbar from "../home/navbar.component";
export default function UserArtist() {
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200 w-full h-full">
      <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full">
          <h2 className="text-3xl text-center pt-12 font-bold tracking-tight text-gray-900">
            Choose your Artist
          </h2>
          <Link to={'/artist/comm'}>
            <div className="mt-10 z-0 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-16">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/image/avatarUser.jpg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Artist
                    </h3>
                    <p className="mt-1 text-xl text-gray-500">Hanyonn</p>
                  </div>
                </div>
              </div>
              {/* <!-- More products... --> */}
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/image/avatarUser.jpg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Artist
                    </h3>
                    <p className="mt-1 text-xl text-gray-500">Hanyonn</p>
                  </div>
                </div>
              </div>
              {/* <!-- More products... --> */}
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/image/avatarUser.jpg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Artist
                    </h3>
                    <p className="mt-1 text-xl text-gray-500">Hanyonn</p>
                  </div>
                </div>
              </div>
              {/* <!-- More products... --> */}
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="/image/avatarUser.jpg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Artist
                    </h3>
                    <p className="mt-1 text-xl text-gray-500">Hanyonn</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
      </div>
    </div>
      </>
  );
}
