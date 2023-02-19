import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <div className="bg-blue-900 h-48 p-10 ">
        <form className="w-full h-auto max-w-sm px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded-lg  ">
          <div className=" flex ">
            <input
              type="text"
              placeholder="From"
              className="w-48 p-2 border rounded shadow-lg m-4"
            />

            <br></br>

            <input
              type="text"
              placeholder="To"
              className="w-48 p-2 border rounded shadow-lg m-4"
            />

            <input type="date" className="w-96 p-2 border rounded shadow-lg m-4" />

            <input type="date" className="w-48 p-2 border rounded shadow-lg" />

            <button
              className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 "
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div> */}
    </BrowserRouter>
  );
}

export default HomePage;
