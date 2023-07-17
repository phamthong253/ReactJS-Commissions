import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
export default function SearchBar(props) {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    !!input && setShowResult(true)
    setInput(e.target.value)
  }
  const handleClear = () => {
    setInput("");
    setShowResult(false);
    inputRef.current.focus();
  } 

  return (
    <div className="w-full mx-auto shadow p-5 rounded-lg bg-white">
      <div className="text-3xl absolute z-10 top-10 md:top-8 md:left-10 cursor-pointer">
        <Link to={"/"}>
          <GrPrevious />
        </Link>
      </div>
      <h1 className="text-center text-4xl py-3">Commission Gallery</h1>
      <div className="relative">
        <div className="absolute flex items-center ml-2 h-full">
          <BsSearch className="w-4 h-4 fill-current text-primary-gray-dark" />
          
        </div>
        {!!input && (
            <button
            className="absolute top-3 right-3"
              onClick={handleClear}
            >
              <AiFillCloseCircle className="w-5 h-5 fill-current text-primary-gray-dark " />
            </button>
          )}
        <input
          onChange={handleChange}
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Search by name, type, price commission..."
          className="px-8 py-3 w-full md:w-[100vh] rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        />
      </div>
      {showResult && props.dataFromParent.length > 0 ? (
        <ul
        className="md:w-[100vh] bg-slate-300 rounded-md shadow mt-3">
          {props.dataFromParent
            .filter((commission) =>
              commission.name.toLowerCase().includes(input)
            )
            .map((commission) => (
              <li
                className=" hover:bg-slate-500 cursor-pointer "
              key={commission.id}
              >
          <hr className="border-t-2 bg-neutral-500 opacity-100 dark:opacity-50 mb-3" />
                <img
                  className="w-8 h-8 rounded-full inline-block mx-2"
                  src={commission.imageSrc}
                  />
                {commission.name}
                <p className="text-sm mx-2">{commission.type.name}</p>
              </li>
            ))}
        </ul>
      ) : null}
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
          Reset Filter
        </button>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
          <h1 className=" cursor-pointer text-center px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            Head Commission Type
          </h1>

          <h1 className=" cursor-pointer text-center px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            Half Body Commission Type
          </h1>

          <h1 className=" cursor-pointer text-center px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            Full Body Commission Type
          </h1>

          <h1 className=" cursor-pointer text-center px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            Chibi Commission Type
          </h1>

          <h1 className=" cursor-pointer text-center px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            Toys Commission Type
          </h1>
        </div>
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  dataFromParent: PropTypes.object,
};
