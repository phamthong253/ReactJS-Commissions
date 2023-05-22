import { useState, useEffect } from "react";
// const course = [{
//     id: 1,
//     name: "HTML,CSS,JavaScript"
// },
// {
//     id: 2,
//     name: "NodeJS"
// },
// {
//     id: 3,
//     name: "ReactJS"
// }]
//  export default function Practice(){
//     const [checked, setChecked] = useState([])

//     const handleCheck = (id) => {
//         setChecked(prev =>{
//             const isChecked = checked.includes(id)
//             if(isChecked){
//                 return checked.filter(item => item != id)
//         }else{
//             return [...prev,id]
//         }
//     })
// }
//     const handleSubmit = () => {
// console.log({ids:checked});

//     }
//     return(
//         <div className="p-5">
//             {course.map(course => (
//                 <div key={course.id}>
//                 <input
//                 checked={checked.includes(course.id)}
//                 onChange={() => handleCheck(course.id)}
//                 type="checkbox"/>{course.name}
//                 </div>
//             ))}
//                 <button
//                 onClick={handleSubmit}
//                  className="bg-sky-600 m-3 px-5 rounded-md"
//                  type="submit">Register</button>
//     </div>

//       )
// }
//  IN RA MÀN HÌNH CÓ CÁC NÚT BẤM MỖI NÚT LÀ 1 NỘI DUNG, LẤY API TỪ jsonplaceholder
// const tabs = ['photos', 'todos', 'users']
const courses = [
  {
    id: 1,
    name: "HTML,CSS,JavaScript",
  },
  {
    id: 2,
    name: "NodeJS",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];
export default function Practice() {
  // const [photos, setPhotos] = useState([])
  // const [type, setType] = useState('photos')
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState();
  const [courseId, setCourseId] = useState(1);

  // useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then(res => res.json())
  //     .then(photos => {setPhotos(photos)})

  // },[type])

  useEffect(() => {
    const handleEvent = ({ detail }) => {
      console.log({ detail });
    };
    window.addEventListener(`course-${courseId}`, handleEvent);

    return () => {
      window.removeEventListener(`course-${courseId}`, handleEvent);
    };
  }, [courseId]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.detail = URL.createObjectURL(file);
    console.log(file);
    setAvatar(file);
  };
  useEffect(() => {
    //cleanup function
    return () => {
      avatar && URL.revokeObjectURL(avatar.detail);
    };
  }, [avatar]);

  return (
    // lọc ra UI từ mảng tabs thông qua phương thức map
    <div>
      <ul>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              color: courseId === course.id ? "red" : "#333",
            }}
            onClick={() => setCourseId(course.id)}
            className="bg-sky-600 w-48 px-5 m-5 rounded-xl"
          >
            {course.name}
          </li>
        ))}
        <input className="top-0" onChange={handlePreviewAvatar} type="file" />
        {avatar && (
          <img src={avatar.detail} alt={avatar.name} className="w-80" />
        )}
      </ul>

      {scroll && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          key={scroll}
          className="fixed right-5 bottom-0 bg-sky-600 p-5"
        >
          Go to top
        </button>
      )}
    </div>
  );
}
