import { Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import { MdOutlinePolicy } from "react-icons/md"
import CarouselHome from "./carousel-home";
import Artist from "./artist.component";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import Collection from "./collection.component";
import useAuth from "../hooks/useAuth.component";

function Home() {
  const { auth } = useAuth();
  return (
    <>
      <Navbar />
      <div className="-z-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
        <div className="max-w-full">
          <br />
          <div className="text-center w-full md:px-60 md:my-32 my-12 py-12 max-w-screen-2xl justify-around">
            <h2 className="text-purple-500 text-6xl font-bold leading-[4.5rem]">
              {auth && (
                <p className="text-gray-700 inline-block">
                  {" "}
                  Hello {localStorage.getItem("username")},
                </p>
              )}{" "}
              Welcome to Hanyonn Commission
            </h2>
            <br />
            <p className="text-xl ">
              Chào mừng bạn đến với trang web lưu trữ tranh vẽ 2D! Đây là nơi
              cho phép bạn lưu trữ và quản lý các bức tranh vẽ 2D một cách dễ
              dàng và thuận tiện. Với trang web của tụi mình, bạn có thể tạo ra
              các bức tranh vẽ mới, sửa đổi các bức tranh hiện có và xóa bỏ
              những bức tranh không cần thiết. Trang web của tụi mình được thiết
              kế để đáp ứng nhu cầu lưu trữ tranh vẽ của mọi người, từ các
              artist chuyên nghiệp đến những người mới bắt đầu với việc vẽ
              tranh.
            </p>{" "}
            {auth ? null : (
              <p className="text-xl mt-5 font-bold">
                Login to create your Commission Collection
              </p>
            )}
            <br />
            {auth ? (
              <Link to={"/create"}>
                <button className="rounded-md text-center text-xl bg-violet-500 border-2 border-black h-14 min-w-[15rem] text-white font-medium leading-10">
                  Let&apos;s get started
                </button>
              </Link>
            ) : (
              <Link to={"/signup"}>
                <button className="rounded-md text-center text-xl bg-violet-500 border-2 border-black h-14 min-w-[15rem] text-white font-medium leading-10">
                  Let&apos;s get started
                </button>
              </Link>
            )}
            <br />
          </div>
          <h1 className="text-3xl text-center mb-2">Cách thức hoạt động</h1>
          <div className="mb-32 max-w-full lg:px-40 px-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center mx-auto">
              <img
                className="h-auto max-w-full rounded-lg"
                src="	https://artcorgi.com/wp-content/uploads/2013/12/beret300px.png"
                alt=""
              />
              <h1>Bước 1</h1>
              <p>Chọn Artist của bạn</p>
            </div>
            <div className="text-center mx-auto">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://artcorgi.com/wp-content/uploads/2013/12/sketch300px.png"
                alt=""
              />
              <h1>Bước 2</h1>
              <p>Nhận xét tranh của bạn</p>
            </div>
            <div className="text-center mx-auto">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://artcorgi.com/wp-content/uploads/2013/12/delivery300px.png"
                alt=""
              />
              <h1>Bước 3</h1>
              <p>Nhận tranh của bạn</p>
            </div>
            <Link to={"/artist"}>
              <div className="flex justify-center mx-auto">
                <button className="rounded-2xl text-center text-xl bg-violet-500 border-2 border-black h-14 min-w-[15rem] text-white font-medium leading-10">
                  Choose your Artist
                </button>
              </div>
            </Link>
          </div>
          <>
            <section className="doll1 mb-32 text-gray-800" id="doll1">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                  <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                    <img
                      src="/image/doll1.png"
                      alt="Doll Commission"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-2xl font-bold mb-4">
                        Tại sao bạn nên chọn tụi mình ?
                      </h2>
                      <p className="text-gray-700 text-xl mb-6">
                        Tập hợp các loại tranh 2D đa thể loại về body char, sáng
                        tạo về mặt thiết kế, nội dung phù hợp với bối cảnh char
                        của bạn. Bạn có thử nghĩ đặt câu hỏi `Nếu như char của
                        mình thuộc thể loại doll toy hoặc nằm trong bối cảnh ở
                        trong một vũ trụ khác thì sẽ như thế nào ?`
                      </p>
                      <p className="text-gray-700 text-xl">
                        Với dịch vụ commission của tụi mình, bạn sẽ có cơ hội
                        làm việc với các artist tài năng, có kinh nghiệm trong
                        lĩnh vực vẽ tranh 2D để tạo ra một tác phẩm hoàn hảo
                        theo yêu cầu của bạn. Tụi mình cam kết mang đến cho bạn
                        một tác phẩm nghệ thuật đẹp mắt và độc đáo, đồng thời
                        đảm bảo rằng mỗi tác phẩm được tạo ra đều mang lại giá
                        trị đích thực và đáp ứng được sự mong đợi của khách
                        hàng.
                      </p>
                      <Link to={"/artist"}>
                        <button className="rounded-2xl my-5 text-center text-xl bg-violet-500 border-2 border-black h-14 min-w-[10rem] text-white font-medium leading-10">
                          Show more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-32 text-gray-800" id="doll2">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-2xl font-bold mb-4">
                        Bạn sẽ nhận được gì khi sử dụng dịch vụ của tụi mình ?
                      </h2>

                      <p className="text-gray-700 text-xl mb-6">
                        Dịch vụ commission của tụi mình không chỉ giúp bạn tạo
                        ra một tác phẩm nghệ thuật độc đáo và mang tính cá nhân
                        cao mà còn giúp bạn trải nghiệm quá trình sáng tạo thú
                        vị và đầy cảm hứng. Bạn sẽ được tham gia vào quá trình
                        thiết kế và đưa ra ý kiến của mình để tác phẩm cuối cùng
                        đáp ứng được yêu cầu và sở thích của bạn.
                      </p>
                      <p className="text-gray-700 text-xl">
                        Tụi mình không chỉ đơn thuần là một dịch vụ vẽ tranh 2D
                        mà còn là một điểm đến hoàn hảo cho những người yêu nghệ
                        thuật, muốn tìm kiếm một trải nghiệm sáng tạo độc đáo và
                        mang tính cá nhân cao. Hơn nữa, tụi mình cam kết mang
                        đến cho bạn một trải nghiệm dịch vụ chuyên nghiệp và tận
                        tâm, với chất lượng tác phẩm được đảm bảo đáng giá với
                        số tiền bạn bỏ ra.
                      </p>
                      <Link to={"/gallery"}>
                        <button className="rounded-2xl my-5 text-center text-xl bg-violet-500 border-2 border-black h-14 min-w-[10rem] text-white font-medium leading-10">
                          Show more
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                    <img
                      src="image/doll2.png"
                      alt="Doll Commission"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-32 text-gray-800" id="doll2">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="items-center flex justify-center">
                  <div className="w-full">
                    <div className="max-w-md mx-auto">
                      <img
                        src="image/doll23.png"
                        alt="Doll Commission"
                        className="w-full mx-auto flex justify-center rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      />
                    </div>
                    <div className="px-10 pb-10 max-w-6xl mx-auto md:px-12">
                      <h2 className="text-3xl font-bold mb-4 flex justify-center">
                        CAM KẾT HOÀN LẠI TIỀN <MdOutlinePolicy className="hidden md:block ml-2 text-3xl" />
                      </h2>
                      <p className="text-green-600 font-semibold text-2xl mb-6 text-center flex">
                        Quyền lợi của bạn sẽ được đảm bảo bởi cam kết hoàn lại
                        tiền 80% của tụi mình{" "}
                        <BsCheckCircle className="hidden md:block ml-2 text-3xl items-center" />
                      </p>
                      <p className="text-gray-700 text-xl mb-6">
                        Sau khi trao đổi làm việc với artist và bạn đã xem các
                        bản sketch (tối đa 3-4 bản) nhưng vẫn không ưng theo ý
                        của bạn sẽ được hoàn lại tiền. Tụi mình sẽ theo dõi quá
                        trình làm việc từ lúc bắt đầu cho đến khi hoàn thành
                      </p>
                      <p className="text-gray-700 text-xl mb-6">
                        Tụi mình rất thích tương tác với bạn và các artist,
                        tụi mình luôn trong trạng thái sẵn sàng hỗ trợ bạn mọi
                        lúc không chỉ những lúc sai sót mà thậm chí những lúc
                        bạn muốn chia sẻ điều gì đó tuyệt vời với tụi mình ^^
                      </p>
                      <p className="text-gray-700 text-xl mb-6">
                        Nếu như trong quá trình làm việc với artist nhưng bạn
                        không được phản hồi hoặc cảm thấy bất ổn thì bạn vẫn
                        được tụi mình hỗ trợ hoàn lại tiền 
                      </p>
                      <p className="text-black text-semibold text-2xl text-center ">
                        Bạn nhận được tranh, hoặc nhận lại tiền 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
        <CarouselHome />
        <Artist />
        <Collection />
        <Footer />
      </div>
    </>
  );
}
export default Home;
