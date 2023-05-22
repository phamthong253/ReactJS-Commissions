// create.component.js

import Axios from "axios"
import {useState, useEffect} from "react"

export default function Create() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [infoList, setInfoList] = useState([])
    

        useEffect(() => {
            Axios.get("http://localhost:3000/commission/create").then(response => {
                console.log("dữ liệu trả về:",response.data)
                setInfoList(response.data)
            })
        },[])  

        const addToList = (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append('tenfile', setImage())
             Axios.post("http://localhost:3000/commission", {
                name: name,
                price: price,
                type: type,
                image: image,
                formData: formData
            }).then((res) => {
                setInfoList(res.data)
                console.log(res.data.message)
            })
        };
        const handlePreviewImage = (e) => {
            const file = e.target.files[0];
            file.detail = URL.createObjectURL(file);
            console.log(file);
            setImage(file.detail);
          };

        return (
            <div className='mt-3'>
                <h3 className='text-3xl'>Add New Commission</h3>
                
                <form
                formMethod="POST"
                formEncType="multipart/form-data"
                formAction="/commission" 
                onSubmit={addToList} 
                className=''>
                    <div className="grid grid-flow- p-4">
                        <label>Thêm ảnh Comm:  </label>
                        <input
                        type="file"
                        name="tenfile"
                        onChange={handlePreviewImage}
                         />{image && (
                            <img 
                            className="w-80"
                            src= {image.detail} alt={image.name}/>
                         )}
                    </div>
                    <div className="grid grid-flow- p-4">
                        <label>Thêm tên Comm:  </label>
                        <input
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        type="text" 
                        className="border border-sky-700 rounded-lg w-64"/>
                    </div>
                    <div className="grid grid-flow- p-4">
                        <label>Thêm thể loại Comm: </label>
                        <select 
                        onChange={(e) => {
                            setType(e.target.value)
                        }} 
                        name='option' className="border border-sky-700 rounded-lg w-64" >
                        <option  disabled selected value=""> Chọn thể loại Comm </option>
                        <option value="Header Commission">Header Commission </option>
                        <option value="Half Body Commission">Half Body Commission </option>
                        <option value="Full Body Commission">Full Body Commission </option>
                        <option value="Chibi Commission">Chibi Commission </option>
                        </select>                        
                    </div>
                    <div className="grid grid-flow- p-4">
                        <label>Thêm giá tiền: </label>
                        <input onChange={(e) => {
                            setPrice(e.target.value)
                        }} type="text" className="border border-sky-700 rounded-lg w-64"/>
                    </div>
                    <div className=" p-4">
                        <input
                        type="submit" 
                        value="Xác nhận"
                        onClick={addToList} 
                         className="bg-sky-600 p-3 rounded-lg"/>
                        <input type="submit" value="Hủy bỏ" className="bg-gray-400 p-3 rounded-lg mx-2"/>
                    </div>
                </form>
            </div>
        )
    }
