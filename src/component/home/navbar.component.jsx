import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiPixiv } from "react-icons/si";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useAuth from "../hooks/useAuth.component";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const {auth, setAuth, user, setUser} = useAuth()
  const navigate = useNavigate()


  // Hàm xử lý đăng xuất
  function handleLogout() {
    localStorage.clear()
    setAuth(false)
    setUser(null)
    navigate("/")
  }

  return (
    <>
      <div className="block">
        <RouterLink to={"/"} className="md:hidden left-10 text-5xl absolute top-5">
           <h5 className="text-purple-600"><img src="/image/art-and-design.png" className="w-10 inline-block" /> Hanyonn</h5>
        </RouterLink>
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl right-8 top-5 md:hidden"
        >
          <Hamburger />
        </div>
        <nav
          className={`z-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200 font-bold absolute pb-3 transition-all duration-500 ease-in z-1 mt-20 md:mt-0 md:right-0 text-center w-full text-2xl md:flex justify-between items-center mx-auto px-4 md:opacity-100 ${
            open ? "right-0" : "overflow-hidden opacity-0"
          }`}
        >
          <RouterLink to={"/"} className="text-5xl ml-10 hidden md:block">
           <h5 className="py-1 w-64 rounded-3xl bg-gradient-to-r from-purple-400 to-violet-500 text-violet-700"><img src="/image/art-and-design.png" className="w-10 inline-block" /> Hanyonn</h5>
          </RouterLink>
          <div className="" id="navbarSupportedContent">
            <ul className="md:flex md:ml-24 mt-5 md:bg-[rgba(255,255,255,0.27)] shadow-[0 4px 30px rgba(0, 0, 0, 0.3)] md:backdrop-blur-sm md:border md:border-white rounded-3xl">
              <li className="md:p-4 text-2xl">
                <RouterLink className="cursor-pointer" to={"/"}>
                  Home
                </RouterLink>
              </li>
              <li className="md:p-4 text-2xl">
                <ScrollLink
                  className="cursor-pointer"
                  to="doll1"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Doll Comm
                </ScrollLink>
              </li>
              <li className="md:p-4 text-2xl">
                <ScrollLink
                  className="cursor-pointer"
                  to="artist"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Artist
                </ScrollLink>
              </li>
              <li className="md:p-4 text-2xl">
                <ScrollLink
                  className="cursor-pointer"
                  to="collection"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  Collection
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="" id="navbarSupportedContent">
            <ul className="flex md:mx-auto ml-10 mt-5 md:bg-[rgba(255,255,255,0.27)]  md:shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] md:backdrop-blur-sm  md:border md:border-white rounded-3xl">
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <FaFacebook className="text-3xl" />
                </RouterLink>
              </li>
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <FaInstagram className="text-3xl" />
                </RouterLink>
              </li>
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <FaTwitter className="text-3xl" />
                </RouterLink>
              </li>
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <SiPixiv className="text-3xl" />
                </RouterLink>
              </li>
              {auth ? (
                <li className="p-3">
                  <img
                    src="image/avatarUser.jpg"
                    className="w-10 rounded-full"
                    onClick={() => setOpenMenu(!openMenu)}
                  ></img>
                  <div className="relative block">
                    {openMenu && (
                      <div className="absolute md:relative z-10 right-5 w-40 divide mt-5 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                        <ul className="p-2">
                          {auth ? (
                            <li className="block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              User: {localStorage.getItem("username")}
                            </li>
                          ) : null}
                          <RouterLink to={"/create"}>
                            <li className="block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              Create
                            </li>
                          </RouterLink>
                          <RouterLink to={"/gallery"}>
                            <li className="block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              Gallery
                            </li>
                          </RouterLink>
                          <RouterLink to={"/profile"}>
                            <li className="block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              Profile
                            </li>
                          </RouterLink>
                          {user.roles ? <RouterLink to={"/manageUser"}>
                            <li className="block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              Manage
                            </li>
                          </RouterLink> : null}
                            <li
                            onClick={handleLogout} 
                            className="cursor-pointer block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              Log out
                            </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <button className="text-base mr-3">
                  <RouterLink to={"/signin"}>Sign in</RouterLink>
                </button>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
Navbar.propTypes = {
  isAuth: PropTypes.bool,
  setIsAuth: PropTypes.func // Thêm đoạn này
};
