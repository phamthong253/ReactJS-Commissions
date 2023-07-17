import { useEffect, useState } from "react";
import instance from "../../interceptor/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import {GrPrevious} from "react-icons/gr"
import useAuth from "../hooks/useAuth.component";

export default function Manage() {
  const userId = useParams();
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState([]);
  const [roles, setRoles] = useState([{id: "1e75d378-f8f6-4738-9677-2026cb633e2f"}]);
  const [rolesId, setRolesId] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChange, setIsChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const {loading, setLoading} = useAuth();

  useEffect(() => {
    setLoading(true)
    instance.get("/user").then((response) => {
      console.log(response.data.data);
      setUser(response.data.data);
    });
    instance.get("/role").then((response) => {
      console.log(response.data.data);
      setRolesId(response.data.data);
    }).finally(() => {
      setLoading(false)
    });
  }, []);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    console.log(nextChecked)
  };
  const editUser = () => {
    instance.patch(`/user/${userId.id}`, {
      username,
      password,
      email,
      roles
    }).then(() => {
      console.log(roles)
      setIsChange(false);
      navigate("/manageUser");
    });
    
  };
  const deleteUser = () => {
    instance.delete(`/user/${userId.id}`, {
      username,
      password,
      email,
    }).then(() => {
      setIsDelete(false);
      setLoading(true)
      navigate("/manageUser")
    }).finally(() => {
      setLoading(false)
    })
  };

  return (
    <div className="w-full h-[100vh] overflow-x-hidden bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
      <div className="text-3xl absolute left-10 top-5 cursor-pointer">
        <Link to={"/"}>
          <GrPrevious />
        </Link>
      </div>
      {loading ? (<div className="flex w-full h-[100vh] bg-transparent">
        <div
        className="mx-auto my-auto h-10 w-10 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
      </div>
      </div>) : <div>
      <h1 className="text-center text-4xl py-5">User Management</h1>
      <>
        <div className="">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="border-collapse min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          User ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Username
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Created Time
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Roles
                        </th>
                      </tr>
                    </thead>
                    {Object.entries(user).map(([key, val]) => (
                      <tbody key={key}>
                        <tr className="border-b font-bold dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {++key}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {val.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {val.username}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {val.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {moment
                              .unix(`${val.createTime}`)
                              .format("YYYY-MM-DD HH:mm:ss")}
                          </td>
                          {val.roles && val.roles.length > 0 ? <td className="whitespace-nowrap px-6 py-4">
                            {val.roles.map((role) => (
                              <h1
                              className="inline-block" 
                              key={role.id}>
                              <p className="mr-1">{role.id == "1e75d378-f8f6-4738-9677-2026cb633e2f" ? "User,"  : null}</p>
                              <p>{role.id == "c02e7c4c-d48e-43f4-872d-94153b7e1ddc" ? "Admin" : null}</p>
                              <p>{role.id == "1f5c0389-4bb4-429b-b668-b5be7267c64c" ? "Artist" : null}</p> 
                              </h1>
                            ))}
                            
                          </td> : null}
                          <td
                            colSpan={2}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            {/* <label className="relative inline-flex items-center mx-5">
                            <Switch
                              onChange={() => handleChange(val.id)}
                              checked={checked}
                              className="react-switch w-11 h-6"
                              />
                            <p>
                              The switch is{" "}
                              <span>{checked ? "on" : "off"}</span>
                            </p>
                          </label> */}
                            <label className="relative inline-flex items-center mr-5 cursor-pointer">
                              <input
                              onChange={() => handleChange(val.id)}
                              type="checkbox"
                              className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                              </span>
                              <p>
                                The switch is{" "}
                                <span>{checked ? "on" : "off"}</span>
                              </p>
                            </label>
                            <Link to={`/manageUser/${val.id}`}>
                              <button
                                onClick={() => setIsChange(true)}
                                className="px-3 mr-5 text-white bg-sky-500"
                              >
                                Edit
                              </button>
                            </Link>
                            <Link to={`/manageUser/${val.id}`}>
                              <button
                                onClick={() => setIsDelete(true)}
                                className="px-3 text-white bg-red-500"
                              >
                                Delete
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div>
              {isChange && (
                <>
                  <div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="fixed inset-0 w-full h-full bg-current opacity-20"></div>
                      <div className="relative mx-auto max-w-3xl bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="px-6 py-6 mx-auto max-w-5xl lg:px-8">
                          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                            Manage User Account
                          </h3>
                          <div className="space-y-6">
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your email
                              </label>
                              <input
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your username
                              </label>
                              <input
                                onChange={(e) => {
                                  setUsername(e.target.value);
                                }}
                                type="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="username"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your password
                              </label>
                              <input
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Confirm password
                              </label>
                              <input
                                type="password"
                                id="password2"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Role
                              </label>
                              <div>
                                <select
                                onChange={(e) => {
                                  setRoles(
                                     [...roles, {id: e.target.value}]);
                                }} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                  <option> Chọn Role </option>
                                  {rolesId.map((role) => (
                                    <option key={role.id} value={role.id}>
                                      {role.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <button
                              onClick={editUser}
                              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Submit
                            </button>
                            <Link to={'/manageUser'}>
                            <button
                              onClick={() => setIsChange(false)}
                              className="w-full mt-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                              Cancel
                            </button>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
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
                              Are you sure you want to delete this user?
                            </h3>
                            <button
                              onClick={deleteUser}
                              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Yes, I`m sure
                            </button>
                            <button
                              onClick={() => setIsDelete(false)}
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
        </div>
      </>
      </div>}
    </div>
  );
}
