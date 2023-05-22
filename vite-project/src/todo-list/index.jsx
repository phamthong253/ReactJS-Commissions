import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, setJob, deleteJob } from "./actions";
//useReducer

// 4. dispatch: là 1 function giúp kích hoạt action hoạt động

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const handleSubmit = () => {
    dispatch(addJob(job));
    inputRef.current.focus();
  };
  const { job, jobs } = state;
  const inputRef = useRef();

  return (
    <div>
      <h1 className="text-3xl">Todo list</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
        className="border-sky-900 m-5 border"
        placeholder="Nhập việc cần làm..."
      ></input>
      <button onClick={handleSubmit} className="bg-sky-600 p-3 rounded-lg">
        Add
      </button>
      <ul className="m-5">
        {jobs.map((job, index) => (
          <>
            <li key={index} className="bg-sky-600 w-32 px-2 m-3">
              {job}
              <span
                onClick={() => dispatch(deleteJob(index))}
                className="text-4xl cursor-pointer inline-block"
              >
                &times;
              </span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
