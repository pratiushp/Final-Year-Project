import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden sm:bg-blue-300">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Register
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="name"
              className="block text-base font-semibold text-blue-600 "
            >
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              for="phone"
              className="block text-base font-semibold text-blue-600 "
            >
              Phone
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-base font-semibold text-blue-600 "
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-base font-semibold text-blue-600"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-blue-600  hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 ">
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-black">
          {" "}
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
}
