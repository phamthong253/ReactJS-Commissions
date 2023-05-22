import { set_job, add_job, delete_job } from "./constant";
// 1. init state: 0
export const initState = {
  job: "",
  jobs: [],
};

// 3. reducer: nhận vào (state, action) => {}
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case set_job:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case add_job:
      newState = {
        ...state,
        job: "",
        jobs: [...state.jobs, action.payload],
      };
      break;
    case delete_job:
      {
        const newJobs = [...state.jobs];

        newJobs.splice(action.payload, 1);
        newState = {
          ...state,
          jobs: newJobs,
        };
      }
      break;
    default:
      throw new Error("Hanh dong khong hop le");
  }
  return newState;
};
export default reducer;
