import useAuth from "../hooks/useAuth.component";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";

export default function Profile() {
  const { user } = useAuth();
  console.log(user);
  if (user.roles && user.length > 0) {
    user.roles.map((role) => console.log(role.name));
  }

  return (
    <div className="w-full h-[120vh] bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
      <div className="text-3xl absolute z-10 top-8 md:top-8 md:left-10 cursor-pointer">
        <Link to={"/"}>
          <GrPrevious />
        </Link>
      </div>
      <h1 className="text-center text-4xl py-5">User Infomation</h1>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="image/avatarUser.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 className="text-xl font-bold">{user.username}</h1>

                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                  Quyền hành động
                </span>
                <ul>
                  {user.roles && user.roles.length > 0
                    ? user.roles.map((role) => role.permissions.map((permission) => (
                    <li key={permission.id}>
                      {permission.name}
                    </li>
                    )))
                    : null}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-2xl leading-6 font-bold text-gray-900">
                    User infomation
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                  </p>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-800">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Mickael Poulaz
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-800">
                        Username
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.username}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-800">
                        Password
                      </dt>
                      <input
                        type="password"
                        placeholder="*******"
                        disabled
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      />
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-800">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.email}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-800">
                        Role
                      </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user.roles && user.roles.length > 0 ? user.roles.map((role) => role.name).join(", ") : null} 
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-800">
                        About
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        To get social media testimonials like these, keep your
                        customers engaged with your social media accounts by
                        posting regularly yourself
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
