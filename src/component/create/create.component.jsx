// create.component.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../dialog/successModal.component";
import FailModal from '../dialog/failModal.component';
import instance from "../../interceptor/axios";
import useAuth from "../hooks/useAuth.component";
export default function Create() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [showFailModal, setShowFailModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [toUserId, setToUserId] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState([]);
  const [typeId, setTypeId] = useState("");
  const [price, setPrice] = useState(0);
  const {loading, setLoading} = useAuth()
  const addToList = () => {
    setLoading(true)
    if(name.length == 0 || typeId.length == 0 || toUserId.length == 0 || price.length === 0){
      setError(true)
    }
    instance.post("/commission", {
      name,
      price,
      typeId,
      imageSrc,
      toUserId,
    }).then(() => {
      setShowModal(true)
        setTimeout(() => navigate("/gallery"), 3000);
    }).catch((err) => {
      console.log("bạn đang bị lỗi", err.response.data.message)
      setShowFailModal(true)
      setTimeout(() => setShowFailModal(false), 3000);
    }).finally( () => {
      setLoading(false)
    })
  };
  useEffect(() => {
    instance.get("/commission-type").then((response) => {
      console.log(response.data);
      setType(response.data.data);
    });
  }, []);

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    function blobToBase64(blob) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    }
    blobToBase64(file).then(setImageSrc);
    console.log(file)
  };

  return (
       <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
       {loading ? (<div className="flex w-full h-[100vh] bg-transparent -z-50">
        <div
        className="mx-auto my-auto h-10 w-10 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
      </div>
      </div>) : 
       <div className="z-50">
      <h3 className="text-3xl text-center py-5">Add New Commission</h3>
      <div className="relative w-full mx-auto max-w-2xl max-h-full bg-white">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg shadow">
            <div className="px-6 py-6 lg:px-8">
              <form
                className="space-y-7"
                onSubmit={addToList}>
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-900 ">
                    Cho phép người dùng nào có thể xem được ? (nhập username của
                    người dùng bạn cho phép)
                  </label>
                  <input
                    onChange={(e) => {
                      setToUserId(e.target.value);
                    } }
                    type="input"
                    className="block w-full p-2.5 rounded-lg bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="vd: username123"
                    required />
                  {error && toUserId.length <= 0 ? (
                    <p className="text-red-500  max-w-full text-sm">
                      Vui lòng không để trống thông tin
                    </p>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-900 ">
                    Thêm tên Comm
                  </label>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    } }
                    type="input"
                    className="block w-full p-2.5 rounded-lg bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    required />
                  {error && name.length <= 0 ? (
                    <p className="text-red-500  max-w-full text-sm">
                      Vui lòng không để trống thông tin
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-bold text-gray-900 "
                    htmlFor="file_input"
                  >
                    Thêm ảnh Comm (upload file)
                  </label>
                  <input
                    onChange={handlePreviewImage}
                    className="block w-full p-2.5 rounded-lg bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file" />
                  {error && imageSrc.length <= 0 ? (
                    <p className="text-red-500  max-w-full text-sm">
                      Vui lòng không để trống thông tin
                    </p>
                  ) : null}
                  {imageSrc && <img src={imageSrc} className="w-96" />}
                  <p
                    className="mt-1 text-sm font-semibold text-gray-900 "
                    id="file_input_help"
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-900 ">
                    Thêm thể loại Comm
                  </label>
                  <div>
                    <select
                      onChange={(e) => {
                        setTypeId(e.target.value);
                        console.log(typeId);
                      } }
                      name="option"
                      className="block w-full p-2.5 rounded-lg bg-gray-200 border-transparent font-semibold focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    >
                      <option> Chọn thể loại Comm </option>
                      {type.map((data) => (
                        <option className="font-semibold" key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                    {error && typeId.length <= 0 ? (
                      <p className="text-red-500  max-w-full text-sm">
                        Vui lòng không để trống thông tin
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-900 ">
                    Thêm giá tiền:
                  </label>
                  <input
                    onChange={(e) => {
                      setPrice(parseInt(e.target.value));
                    } }
                    type="number"
                    className="block w-full p-2.5 rounded-lg bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    required />
                  {error && price.length <= 0 ? (
                    <p className="text-red-500  max-w-full text-sm">
                      Vui lòng không để trống thông tin
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  className="bg-sky-600 p-3 rounded-lg text-white"
                  onClick={addToList}
                >
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>}
        {showModal && <div>
          <SuccessModal />
        </div>}
        {showFailModal && <div>
          <FailModal message={
              "Thông tin bạn điền vào không chính xác, xin vui lòng thử lại !"
            } />
        </div>}
        </div>
         )}
