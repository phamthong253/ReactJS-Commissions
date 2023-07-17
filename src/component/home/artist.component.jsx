import { Link } from "react-router-dom";
export default function Artist() {
  return (
    <div
      className="mt-28 lg:flex flex-auto justify-between max-w-full lg:my-48 lg:px-40 px-14"
      id="artist"
    >
      <div className="lg:flex lg:flex-1 lg:flex-col lg:mr-5 mb-7">
        <h1 className="relative lead-[8.5rem] mb-7 text-3xl block font-bold">
          ARTIST
        </h1>
        <p className="block items-center text-2xl font-semibold mb-6">
          Bạn đang có nhu cầu vẽ tranh 2D chuyên nghiệp hoặc muốn được trở thành
          artist của tụi mình ?
          </p>
          <p className="text-xl text-gray-700">
          Tụi mình sẽ giúp bạn tạo ra những bức tranh đẹp và sáng tạo
          cho mọi người. Hãy đến với dịch vụ của tụi mình. Với chất lượng và sự
          chuyên nghiệp của dịch vụ của Hanyonn, bạn sẽ không phải lo lắng về
          bất kỳ khía cạnh nào của quá trình vẽ tranh 2D. Hãy liên hệ với tụi
          mình ngay hôm nay để biết thêm thông tin về dịch vụ vẽ tranh 2D của
          tụi mình và nhận được sự hỗ trợ sớm nhất. Tụi mình rất muốn có cơ hội
          được hợp tác với bạn
        </p>
        <Link to={"/"}>
          <button className="rounded-2xl my-5 text-center text-xl bg-purple-600 h-14 min-w-[10rem] text-white font-medium leading-10">
            Show more
          </button>
        </Link>
      </div>
      <div>
        <img className="lg:w-64" src="./image/avatarUser.jpg" />
      </div>
    </div>
  );
}
