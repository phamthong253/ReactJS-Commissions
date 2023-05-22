// index.component.js
import { useState, useEffect} from "react"
import Axios from "axios"

export default function Gallery() {
    const [infoList, setInfoList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3000/commission/create").then(response => {
            console.log(response.data)
            setInfoList(response.data)
        })
    },[]) 
    
    const deleteCommission = (id) => {
        Axios.delete(`http://localhost:3000/commission/delete/${id}`)
        console.log("deleted")
    }
        return (
            <div>
                <p>Welcome to Gallery Component!!</p>
                <h1 className="text-center text-3xl">Render Commission </h1>
                {infoList.map((val) => (
                    <div
                    key={val._id}
                    className="inline-block mx-20 my-5 rounded-lg border border-sky-950 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
                      <img
                        className="rounded-t-lg w-80 h-52 object-cover "
                        src={val.image}
                        alt="" />
                    <div className="p-6">
                      <h5
                        className="mb-2 text-xl font-medium leading-tigh">
                       Tên Comm: {val.name}
                      </h5>
                      <p className="mb-4 text-base ">
                        Thể loại Comm: {val.type}
                      </p>
                      <p className="mb-4 text-base ">
                       Giá Comm: {val.price}
                      </p>
                      <button
                        type="button"
                        onClick={deleteCommission}
                        className="inline-block rounded bg-sky-600 border px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
        )
}
