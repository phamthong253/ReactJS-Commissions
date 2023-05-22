
// 2. action:
export const setJob = payload => {
  return{
    type:"set_job",
    payload
  }
}
export const addJob = payload => {
  return{
    type:"add_job",
    payload
  }
}
export const deleteJob = payload => {
  return{
    type:"delete_job",
    payload
  }
}