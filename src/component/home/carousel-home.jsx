import { Carousel, IconButton } from "@material-tailwind/react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
function CarouselHome() {
  const imgCrs = [
    {
      id: 1,
      imgSrc: "/image/halfbody7.jpg",
      details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit,
                Eveniet aut atque quae voluptas corporis consectetur maxime ipsa
                numquam, nesciunt reprehenderit facere harum a deleniti odio
                rerum delectus dolore, iste laborum. Maxime officiis recusandae`,
    },
    {
      id: 2,
      imgSrc: "/image/halfbody15.jpg",
      details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet aut atque quae voluptas corporis consectetur maxime ipsa
                numquam, nesciunt reprehenderit facere harum a deleniti odio
                rerum delectus dolore, iste laborum. Maxime officiis recusandae`,
    },
    {
      id: 3,
      imgSrc: "/image/halfbody3.jpg",
      details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit,
                Eveniet aut atque quae voluptas corporis consectetur maxime ipsa
                numquam, nesciunt reprehenderit facere harum a deleniti odio
                rerum delectus dolore, iste laborum. Maxime officiis recusandae`,
    },
  ];
  return (
    <>
      <Carousel
        className="rounded-xl bg-white shadow-lg py-12"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-4"
          >
            <TfiAngleLeft strokeWidth={2} className="text-purple-700 w-6 h-6" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 !right-4"
          >
            <TfiAngleRight
              strokeWidth={2}
              className=" text-purple-700 w-6 h-6"
            />
          </IconButton>
        )}
      >
        {imgCrs.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-wrap mx-auto mt-5 bg-purple-400 item-center w-4/5 border border-sky-700 overflow-hidden after:clear-both after:block after:content-['']"
          >
            <div
              className="relative lg:flex grow-0 shrink-0 basis-auto float-left -mr-[100%] w-full lg:w-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              <img
                src={item.imgSrc}
                className="block w-full lg:h-[450px] object-cover"
                alt="Wild Landscape"
              />
              <div className=" flex grow-0 shrink-0 basis-auto mx-auto w-full md:min-h-0 md:w-[45rem] md:ml-0 lg:px-8 lg:py-8 md:pr-12 rounded-2xl">
                <div className="p-6 md:max-h-44 lg:rounded-lg">
                  <p className="text-3xl text-center">Lilia</p>
                  {item.details}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
export default CarouselHome;
